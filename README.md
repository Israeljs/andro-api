# Andro API
API do sistema Andro, um sistema que reúne todos os vendedores de comida pronta mais próximo de você.

#### Ferramentas

- [yarn](https://classic.yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [nodemon](https://nodemon.io/)
- [mongodb](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/docs/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [JSON Web Token](https://jwt.io/)

#### Clonando o projeto com o Git

Para clonar o projeto via linha de comando, abra o terminal no seu computador e execute os comandos:

```shell
https://github.com/Israeljs/andro-api.git
cd andro-api
```

Antes de fazer qualquer alteração no código, é obrigatório dar inicio ao workflow do Git. Digite `git flow init` e aperte `Enter` algumas vezes até chegar no resultado abaixo:

```shell
git flow init

No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [~/home/israel/andro-front/.git/hooks]
```

#### Conectando o servidor ao banco de dados mongodb

Os dados de conexão com o banco de dados mongodb estão no arquivo .env que por enquanto não foi incuído no arquivo .gitignore.


#### Executando o projeto

Depois de todas as configurações acima, execute o comando abaixo para subir o servidor no ambiente de desenvolvimento. Certifique-se de que o seu banco de dados esteja funcionando e acessível.

```shell
yarn install
```
```shell
yarn start
```

As requsições à API devem conter no header um token como no exemplo abaixo:

```shell
Authorization: Bearer {token}
```
### Contribuição

Arthur Luis

Emanuel Augusto

Ibson Lima

Israel Jeronimo
