import * as http from "http";

const sql = require("mssql");
const sqlConfig = {
  user: "sa",
  password: "tman19!*.",
  database: "master",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: false,
  },
};

(async () => {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`select * from spt_monitor`;
    console.dir(result);
  } catch (e) {
    throw e;
  }
})();

http
  .createServer((_, res) => {
    res.write("Working!");
    res.end();
  })
  .listen(80);
