FROM nginx

COPY ./conf.d /etc/nginx/conf.d

COPY ./dist /usr/share/nginx/html

EXPOSE 80
