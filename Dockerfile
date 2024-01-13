FROM node:14
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]
