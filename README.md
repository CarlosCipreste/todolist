# ToDoList

Uma lista de tarefas simples.

# Tecnologias usadas

## Back-End
<a href="https://www.typescriptlang.org/"><img align="center" alt="TypesScript" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></a>
<a href="https://nodejs.org/pt-br/"><img align="center" alt="NodeJS" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /></a>
<a href="https://expressjs.com/pt-br/"><img align="center" alt="Express" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" /></a>


## Front-End
<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"><img align="center" alt="HTML" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></a>
<a href="https://https://angular.dev/"><img align="center" alt="Angular" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" /></a>
<a href="https://sass-lang.com/"><img align="center" alt="Sass" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" /></a>

## Banco de Dados
<a href="https://www.mysql.com"><img align="center" alt="Sass" height="50" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" /></a>

# Como rodar!

### Clone o Repositório.

```shell
git clone https://github.com/manualdodev/todolist-fullstack.git
```

### Após clonar o repositorio, crie o banco de dados MySql.

```sql
# Certifique-se de ter uma instancia de MySql instalado em seu computador.

CREATE DATABASE database_name;
```

### Após criar o banco de dados, crie a tabelas task que será usada no aplicativo.


```sql
CREATE TABLE tasks(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
```

### Na pasta Backend tera um arquivo .env.example contendo 5 campos que terao de ser preenchidos em um arquivo .env, recrie este arquivo ou crie um, e preencha os campos necessários.

```
PORT= [Porta aonde o server irá rodar]
MYSQL_HOST= [O host do seu computador, por padrão é localhost]
MYSQL_USER= [Seu usuário, por padrão o MySql utiliza o user 'root']
MYSQL_PASSWORD= [A senha definida ao instalar o MySql]
MYSQL_DB= [O nome do banco de dados criado anteriormente]
```

### Antes de iniciar a aplicação, precisamos instalar o 'node_modules' e para isso basta abrir um terminal na pasta "backend" (é aconselhável utilizar o terminal do editor/IDE).

```shell
npm install
```

### Por fim, basta executar o comando para iniciar o servidor e acessar.

```shell

npm start
```

<br>
