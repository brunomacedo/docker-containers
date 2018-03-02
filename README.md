# Docker Multiple Containers

- nginx from command line [view](nginx-command/README.md)

- nginx from Dockerfile [view](nginx/README.md)

- python from Dockerfile [view](python/README.md)


## Commands

- Inspect a specific config inside the `Dockerfile`.
Show the label author `Bruno Macedo <...>`.
```prompt
docker image inspect --format="{{index .Config.Labels \"maintainer\"}}" my-image
```
