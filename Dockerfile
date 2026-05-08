FROM nginx
#RUN apt update && apt install nano -y
WORKDIR /usr/share/nginx/html/
COPY . /usr/share/nginx/html/
