import { DataSource } from "typeorm";
import { Post, Tag } from "../entity/Posts";

require('dotenv').config({path: '../.env'});

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [Post, Tag],
    subscribers: [],
    migrations: [],
})