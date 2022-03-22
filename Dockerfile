FROM node:16-alpine as builder

#specify the working directory
WORKDIR '/app' 
#copy json package to the app directory 
COPY package.json .
RUN npm install
#copy over all the source codes
COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html