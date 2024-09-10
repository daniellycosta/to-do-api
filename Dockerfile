FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run migration:run
COPY . .
EXPOSE ${PORT}

# Start the Node.js application
CMD ["npm", "start"]