# Docker Multiple Containers

## Commands

- Run docker and expose in a port and create volume link to a custom folder
```prompt
docker container run -p 8080:80 -v C:/Users/bmsbr/Desktop/docker-run/html:/usr/share/nginx/html nginx
```

- Exec some command inside the container:
```prompt
docker container exec docker-run uname -or
```
