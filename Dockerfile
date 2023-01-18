FROM node:19-slim as build

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY ./ /app/

EXPOSE 3000
CMD ["npm", "run", "start"]

# docker build -t irs-frontend .
# docker run -p 8080:3000 --name irs-frontend product-item-relationship-service-frontend
# docker tag product-item-relationship-service-frontend ghcr.io/catenax-ng/product-item-relationship-service-frontend