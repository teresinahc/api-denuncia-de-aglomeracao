FROM node:alpine

WORKDIR /usr/app

#copy the package to "." -> /usr/app
COPY package*.json .
COPY yarn.lock .

#install dependecies
RUN yarn install

#copy all file to "." -> /usr/app
COPY . .

EXPOSE 3333