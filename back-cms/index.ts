import express, { Request, Response, json, urlencoded } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { rateLimit } from 'express-rate-limit';
require('dotenv').config()
const app = express();


const PORT = process.env.PORT_BACK;

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
app.use(urlencoded({extended: true}));


app.get('/', async (req: Request, res: Response) => {

    res.json([
        {message: "ok"}
    ])
});



app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Listening on: http://localhost:${PORT}`)
})