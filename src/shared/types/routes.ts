export const ROUTES = {
  GREETING: '/',
  NOT_FOUND: '/:pathMatch(.*)*',
}

export type RouteNames = (typeof ROUTES)[keyof typeof ROUTES]
