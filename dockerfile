From node:latest
RUN npm install -g nodemon
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 80
CMD [ "npm","run" ,"dev"]