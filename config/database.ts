import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: 5432,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

pool.connect();

// pool.query("SELECT * FROM public.products", (error, response) => {
//   if (!error) {
//     console.log(response.rows);
//   } else {
//     console.log(error.message);
//   }

//   pool.end;
// });

// module.exports = {
//  pool
// }
// ================================================
// const { Client } = require("pg");
// const Pool = require("pg").Pool
// const Pool = require("pg").Pool

// export const pool = new Pool({
//     user: "Jane",
//     host: "localhost",
//     port: 5432,
//     database: process.env.PG_DATABASE
// });

// =====================================
// require("dotenv").config();
// const { Pool } = require("pg");

// const database = process.env.PGDATABASE;

// const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

// const pool = new Pool({
//   connectionString: connectionString,
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
//   end: () => pool.end(),
// };
