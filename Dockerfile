FROM node:lts-jessie

# Port to listen on
EXPOSE 8080

# Copy app and install packages
WORKDIR /app
COPY . /app/

COPY package*.json ./

RUN npm install
COPY . .

# Default app commands
CMD ["npm", "run", "start:dev"]