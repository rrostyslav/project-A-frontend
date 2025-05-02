# syntax=docker/dockerfile:1.4

#########################################
# Stage 1: build with Bun
#########################################
FROM oven/bun:latest AS builder
WORKDIR /app

# copy manifests for caching
COPY package.json bun.lock tsconfig.json vite.config.ts ./

# cache Bun’s downloads & skip scripts (no git needed)
RUN --mount=type=cache,id=bun-cache,target=/root/.bun \
    bun install --ignore-scripts

# copy source & run Vite build
COPY . .
RUN bunx vite build

#########################################
# Stage 2: prod image with Nginx
#########################################
FROM nginx:alpine AS production

# remove default assets & config
RUN rm -rf /usr/share/nginx/html/* \
    && rm /etc/nginx/conf.d/default.conf

# copy built files & custom config
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
