# Builds the site and serves it with nginx, for Cloud Run.
# Build from the repository root, because the site uses ../DesignFiles:
#   docker build -f site/Dockerfile -t wedding-site .

FROM node:24-alpine AS build
WORKDIR /app/site
COPY site/package.json site/package-lock.json ./
RUN npm ci
COPY DesignFiles /app/DesignFiles
COPY site ./
RUN npm run build

FROM nginx:1.30-alpine
# Cloud Run sends traffic to $PORT; nginx fills it into the template when the container starts.
ENV PORT=8080
COPY site/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/site/dist /usr/share/nginx/html
