# Docker Multiple Containers

## Commands

- Run docker and expose in a port and create volume link to a custom folder.
You can define the root path using `$(pwd)` or `%cd%` if pwd doesn't work.
```prompt
docker container run --name my-container -p 3000:80 -v /$(pwd)/html:/usr/share/nginx/html nginx
```

- With parameter `-d`: It runs your container in background.
```prompt
docker container run -d --name my-container -p 3000:80 -v /$(pwd)/html:/usr/share/nginx/html nginx
```

- Exec some command inside the container, for example show the system name.
```prompt
docker container exec my-container uname -or
```

- Build a image from a `Dockerfile`.
`-t` names it and dot end `.` is the local folder.
```prompt
docker image build -t my-image .
```

- Run container from `my-image` build.
```prompt
docker container run -p 8080:80 my-image
```

- Inspect an especific config inside the `Dockerfile`.
Show the label author `Bruno Macedo <...>`.
```prompt
docker image inspect --format="{{index .Config.Labels \"maintainer\"}}" my-image
```
