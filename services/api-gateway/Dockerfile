FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --verbose
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
