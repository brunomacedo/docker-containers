# Workers: 10 passsos para criar uma aplicação

- [x] Iniciando a composição com o banco de dados
- [x] Usando volumes e scripts de banco de dados
- [x] Começando nossa camada de front-end
- [x] Aplicativo para enfileirar as mensagens
- [ ] Configurando um proxy reverso
- [ ] Redes, dependência e banco de dados
- [ ] Fila e workers
- [ ] Escalar é preciso...
- [ ] 12 Factors
- [ ] Sobreescrevendo localmente

![Workers](screenshots/workers.png)

## Commands

- Run commands inside the container with docker-compose
```prompt
docker-compose exec database psql -U postgres -c '\l'
```

![List Postgres DB](screenshots/list-postgres.png)

- Execute the file `-f` and list postegres
```prompt
docker-compose exec database psql -U postgres -f ./scripts/check.sql
```

- Show logs
```prompt
docker-compose logs -f -t
```
