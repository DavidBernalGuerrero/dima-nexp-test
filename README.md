# dima-nexp-test

### Setup

1. Adapt `.env`files on both projects. Use the template stored such `.env.example`.
2. Install Postgre using `docker-compose.yml`. Execute:

```
docker compose up -d
```

3. Install the libraries of both projects:

```
    $ cd backend
    $ npm install
    $ cd ../frontend
    $ npm install
```

### Run the projects

Open a terminal and run the backend project with:

```
    $ cd backend
    $ npm run start
```

Then open a second terminal and run the frontend project with:

```
    $ cd frontend
    $ npm run dev
```
