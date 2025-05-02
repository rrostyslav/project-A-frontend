#!/usr/bin/env bash
set -euo pipefail

# Build the multi-stage prod image and run it on port 80
DOCKER_BUILDKIT=1 docker build -t project-a-frontend .
docker run -p 80:80 project-a-frontend
