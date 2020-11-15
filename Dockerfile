FROM node:boron
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
RUN npm install pm2 -g
COPY . /usr/src/app
EXPOSE 4000
# CMD ["pm2-docker", "start", "process.json"]
CMD ["npm", "start"]
