# Docker Multiple Containers

## Commands

- Build image `my-python-image`
```prompt
docker image build -t my-python-image .
```

- Run container interative mode `-it`
```prompt
docker container run -it -v /$(pwd):/app -p 3008:8000 --name python-container my-python-image
```

- Create a new container to read the logs from another container
```prompt
docker container run -it --volumes-from=python-container debian cat log/http-server.log
```

- Open container terminal
```prompt
docker container exec -it new_debian_container bash
```
