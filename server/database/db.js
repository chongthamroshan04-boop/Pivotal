import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pivotal",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export default pool;