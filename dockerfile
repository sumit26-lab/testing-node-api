From node:latest
RUN npm install -g nodemon
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm","run" ,"dev"]