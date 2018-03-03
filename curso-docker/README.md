## Doubler Docker containers

### Container1

- Create
```prompt
docker container run -d --name container1 alpine sleep 1000
```

- Show interface of the container
```prompt
docker continer exec -it container1 ifconfig
```

- ...older docker versions
```prompt
docker exec -it container1 ifconfig
```
