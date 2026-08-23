import express from 'express';
import cors from 'cors';
import dutyRouter from './routes/duty.router.ts'
import { env } from '../env.ts';

const port = env.port;
const base_url = env.baseUrl;

const server = express();

server.use(express.json());
server.use(cors());

server.use(base_url + "/duties", dutyRouter);

server.listen(port, () => {
    console.log(`Listening ports ${port}...`)
});

export default server;