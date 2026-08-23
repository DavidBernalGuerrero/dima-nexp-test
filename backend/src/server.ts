import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dutyRouter from './routes/duty.router.ts'

dotenv.config();

const port = process.env.BACKEND_PORT;
const base_url = process.env.BASE_API_URL;
const server = express();

server.use(express.json());
server.use(cors());

server.use(base_url, dutyRouter);

server.listen(port, () => {
    console.log(`Listening ports ${port}...`)
});

export default server;