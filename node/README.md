## Commands

- Build image `my-node-image`
```prompt
docker image build -t my-node-image .
```

- Run container
```prompt
docker container run -it -v /$(pwd):/app -p 3000:3000 --name my-node-container my-node-image
```

- Open container terminal
```prompt
docker container exec -it my-node-container sh
```

- Remove container
```prompt
docker container rm my-node-container
```

- Remove image
```prompt
docker image rm my-node-image
```
