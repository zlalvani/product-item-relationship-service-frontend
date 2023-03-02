FROM node:18.14.2 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./demotestdata ./demotestdata 
COPY ./html ./html
COPY ./public ./public
COPY ./src ./src
COPY ./.env ./.env
COPY ./favicon.ico ./favicon.ico
COPY ./index.html ./index.html
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./vite.config.prod.ts ./vite.config.ts
COPY ./vitest-setup.js ./vitest-setup.js

RUN npm run build

# production stage
FROM bitnami/nginx:1.22.1 as production-stage

USER 1001
COPY --from=build-stage /app/dist /opt/bitnami/nginx/html
ENV NGINX_HTTP_PORT_NUMBER=8080
EXPOSE 8080

# docker build --no-cache -t product-item-relationship-service-frontend .
# docker run -p 8080:3000 --name irs-frontend product-item-relationship-service-frontend
# docker tag product-item-relationship-service-frontend ghcr.io/catenax-ng/product-item-relationship-service-frontend
# docker run -p 3000:3000 product-item-relationship-service-frontend
# docker run -p 3000:3000 ghcr.io/catenax-ng/product-item-relationship-service-frontend:main
