const Pool = require("pg").Pool

export const pool = new Pool({
    user: "Jane",
    host: "localhost",
    port: 5432,
    database: "postgrestest"
});


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