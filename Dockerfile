FROM node:12.16.2

WORKDIR /usr/app

#copy the package to "." -> /usr/app
COPY package*.json .
COPY yarn.lock .

#install dependecies
RUN yarn install

#copy all file to "." -> /usr/app
COPY . /usr/app

EXPOSE 3333
