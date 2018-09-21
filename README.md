# Docker Multiple Containers

- nginx from command line [view](nginx-command)

- nginx from Dockerfile [view](nginx)

- python from Dockerfile [view](python)

- network container [view](network)

- docker-compose example `Nginx` | `Node` | `MongoDB` | [view](compose)


## Node Container (From Dockerfile)

- Dockerfile example `Node` | [view](node)


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


## Best practices for writing Dockerfiles [follow](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

Just some reminders :

    Run only one process in a container.
    Never run a process as root in a container.
    Never store data in a container, do it in a volume
    Never store credentials in a container, do it in a volume
    Keep your image up to date
    Verify third-party container repositories
    Use tool like docker-security-scanning
    May the force be with you 🙏


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
