import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 

dotenv.config();

const port = process.env.BACKEND_PORT;

const server = express();

server.use(express.json());
server.use(cors());

server.listen(port, () => {
    console.log(`Listening port ${port}...`)
});

export default server;