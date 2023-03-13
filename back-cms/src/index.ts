import express, { Request, Response, json, urlencoded } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { rateLimit } from 'express-rate-limit';
import { AppDataSource } from './database/data-source';

import bodyParser from 'body-parser';
import { handleError } from './utils/errors';
import { opinionRouter } from './routes/opinion.router';
require('dotenv').config({ path: '../.env' })
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT_BACK;
const HOST = process.env.HOST_BACK;

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.disable('x-powered-by');
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
    res.json([{
        message: 'Home'
    }])
});

app.use('/opinions', opinionRouter);
app.use(handleError);

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Listening on: ${HOST}:${PORT}`)
})