# Docker Multiple Containers

## Commands

- Run container interative mode `-it`
```prompt
docker container run -it -v /$(pwd):/app -p 3008:8000 --name python-container my-python-image
```

- Create a new container to read the logs from another container
```prompt
docker container run -it --volumes-from=python-container nginx cat /log/http-server.log
```
