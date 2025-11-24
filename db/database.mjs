// npm i mysql2
import mysql from "mysql2";
import { config } from "../config.mjs";

// mysql 연결
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password,
});

// mysql db 데이터 가져오기
export const db = pool.promise();
