FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./

USER root

RUN npm install --only-prod
COPY . .
EXPOSE 2001

CMD ["npm", "start"]
# Use the official Render base image
FROM render/base:15

# Install Chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*
