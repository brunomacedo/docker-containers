# Docker Multiple Containers

- nginx from command line [view](nginx-command)

- nginx from Dockerfile [view](nginx)

- python from Dockerfile [view](python)

- network container [view](network)

- docker-compose example `Nginx` | `Node` | `MongoDB` | [view](compose)


## Create services with reverse proxy

- run docker [frontend, backend, postgres] [view](workers)


## Apache Velocity and Ngnix

- docker: html using apache velocity and server images with ngnix [view](velocity)

## Commands

- Inspect a specific config inside the `Dockerfile`.
Show the label author `Bruno Macedo <...>`.
```prompt
docker image inspect --format="{{index .Config.Labels \"maintainer\"}}" my-image
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
