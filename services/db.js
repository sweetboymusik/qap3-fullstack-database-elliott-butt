// import pg Pool
const Pool = require("pg").Pool;

// configure pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "groceries",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
