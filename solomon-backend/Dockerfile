FROM node:14.16.1-alpine

# Env variables
ENV NODE_ENV aws
ENV http_proxy http://gateway.zscloud.net:10402
ENV https_proxy http://gateway.zscloud.net:10402

WORKDIR /app/

COPY ./package.json .
COPY ./tsconfig.build.json .
COPY ./tsconfig.json .

COPY ./config ./config

# vector root certificate needs to be installed to allow connection to git
RUN apk add ca-certificates
ADD ./config/certificate/vec-cert.crt /usr/local/share/ca-certificates/
USER root
RUN update-ca-certificates

# git is needed to install solomon-models from git repository
RUN apk add git


# install all other dependencies
RUN npm install

# needed to make sure the latest models are used
RUN npm update solomon-models

COPY ./src ./src

RUN npm run build

EXPOSE 443

CMD ["node", "dist/main"]