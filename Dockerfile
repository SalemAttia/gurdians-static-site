FROM node:10.1.0

# Also exposing VSCode debug ports
EXPOSE 8080

WORKDIR /app

COPY ./package.json .

RUN npm install -g gatsby-cli

RUN npm install && npm cache clean
COPY . .
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]