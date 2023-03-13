import { DataSource } from "typeorm";
import { Opinion } from "../entity/opinions";
import { Tag } from "../entity/tags";

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
    entities: [Opinion, Tag],
    subscribers: [],
    migrations: [],
})