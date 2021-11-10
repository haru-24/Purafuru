FROM node:14.4.0-alpine3.12
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm i
EXPOSE 8888
CMD ["npm", "run", "start"]