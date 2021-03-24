FROM node:14
# App directory
WORKDIR /usr/src/app
# Copy app package json
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm","run","dev"]
