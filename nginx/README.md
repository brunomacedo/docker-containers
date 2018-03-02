# Docker Multiple Containers

## Commands

- Build a image from a `Dockerfile`.
`-t` names it and dot end `.` is the local folder.
```prompt
docker image build -t my-image .
```

- Run container from `my-image` build.
```prompt
docker container run -p 8080:80 my-image
```

- Inspect a specific config inside the `Dockerfile`.
Show the label author `Bruno Macedo <...>`.
```prompt
docker image inspect --format="{{index .Config.Labels \"maintainer\"}}" my-image
```
