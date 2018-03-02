# Docker Multiple Containers

- nginx from command line [view](nginx-command/README.md)
- nginx from Dockerfile [view](nginx/README.md)

- Inspect a specific config inside the `Dockerfile`.
Show the label author `Bruno Macedo <...>`.
```prompt
docker image inspect --format="{{index .Config.Labels \"maintainer\"}}" my-image
```
