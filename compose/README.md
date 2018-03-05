# Create docker-compose
Run multiple containers with `docker-compose.yml`.

## Services

- **Frontend:** Nginx
- **Backend:** Node
- **DB:** MongoDB

## Config docker-compose

### Frontend
Nginx runs by default in `/usr/share/nginx/html/`. I created a volume to change default folder to read `/frontend/` inside my project.

```yaml
frontend:
  image: nginx
  volumes:
    - ./frontend:/usr/share/nginx/html/
  ports:
    - 80:80
```

### Backend
Node runs by default on port 3000. Start the container with command that install `npm` and execute the application [express].

```yaml
backend:
  image: node
  volumes:
    - ./backend:/backend
  ports:
    - 3000:3000
  command: bash -c "cd /backend && npm i && node app"
```

### Database
Just runs the mongo container.

```yaml
database:
  image: mongo
```
