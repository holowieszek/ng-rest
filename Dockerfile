FROM node:lts-jessie

RUN apt-get update && apt-get upgrade -y && apt-get install mysql-client -y
# Port to listen on
EXPOSE 8080

# Copy app and install packages
WORKDIR /app
COPY . /app/

# Default app commands
ENTRYPOINT ["npm install"]
CMD ["npm", "run", "start:dev"]