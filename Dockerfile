FROM node:18

RUN npm i -g nodemon
RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

EXPOSE 3000

CMD [ "npm", "run", "dev" ]