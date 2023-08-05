
# Tasks in background with Redis

Project built during the course of Background Tasks using Node.js and Redis by DIO






## Environment variables

To run this project, you will need to add the following environment variables to your .env

`PORT`

`MAIL_HOST`
`MAIL_PORT`
`MAIL_USER`
`MAIL_PASS`

`REDIS_HOST`
`REDIS_PORT`

## Installation

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Run the command below to install the project dependencies

```bash
  npm install
```

Run command to upload a docker container with redis, if necessary edit the docker-compose.yml file

```bash
  docker-compose up -d
```

Configure the .env file by modifying the name of .env.example and editing it with your informations

Run server
```bash
  npm run start:dev
```
    
Run server queue
```bash
  npm run queue
```

## API documentation

#### Create User

```http
  POST /users
```

| Body   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | User name for account creation |
| `email` | `string` | User mail for account creation |


## Learnings

What did you learn building this project?

Create queues using redis in a simple welcome email sending process.


## Authors

- [@FransergioDev](https://github.com/FransergioDev)


## Stack used


**Back-end:** Node, Express, Javascript, NodeMailer, Bull, Monitoro

