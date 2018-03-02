FROM nginx:latest
LABEL maintainer 'Bruno Macedo <contato@brunomacedo.com.br>'

RUN echo '<h1>Hello World! </h1>' > /usr/share/nginx/html/index.html
