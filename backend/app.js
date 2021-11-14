const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nishiura",
  database: "sample",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
  const sql = "select * from users";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.use(cors());

app.get("/", (req, res) => res.send("hello-world"));
app.listen(PORT, () => console.log(`Server Run Port:${PORT}`));
