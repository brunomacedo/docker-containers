## Doubler Docker containers

### Create two containers

- Create container that auto stop in 1000 seconds, using parameter `sleep %`.
```prompt
docker container run -d --name container1 alpine sleep 1000
docker container run -d --name container2 alpine sleep 1000
```

- Show interface of the container. IP `172.17.0.3` in container2
```prompt
docker container exec -it container1 ifconfig
```

- Test if the container1 is conected with container2
```prompt
docker container exec -it container1 ping 172.17.0.3
```
