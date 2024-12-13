
# Octobees Technical Assignment - Full Stack Developer




## Tech Stack

- Laravel 11.35.0
- React
- Inertia
- Tailwind
- MySQL
- Nginx




## API Reference

#### Get all data

```http
  GET /
```

#### Store new data

```http
  POST /persons
```

#### Get data to edit

```http
  GET /persons/${person}/edit
```

#### Update data

```http
  PUT /persons/${person}
```

#### Delete data

```http
  DELETE /persons/${person}
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/thoriqaufar/octobees-technical-assignment.git octobees
```

Go to the project directory

```bash
  cd octobees
```

Copy .env.example

```bash
  cp .env.example .env
```

Docker setup

```bash
  docker compose build
```

Run the container

```bash
  docker compose up
```

Open new terminal to migrate the database

```bash
  docker compose exec app sh
```

then

```bash
  php artisan migrate --seed
```

Open localhost:8080 in web browser

