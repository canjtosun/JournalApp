const express = require("express");
const app = express();
const mysql = require("mysql2");
var cors = require("cors");

const bodyParser = require("body-parser");
const tableName = "/JournalTable";

const db = mysql.createConnection({
  host: "sql3.freesqldatabase.com",
  user: "sql3457939",
  password: "eNKs2r6wqZ",
  database: "sql3457939",
  port: 3306,
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get(tableName, (req, res) => {
  const qr = `SELECT * FROM JournalTable`;
  db.query(qr, (err, result) => {
    if (err) console.log(err, "error");
    if (result.length > 0) {
      res.send(result);
    }
  });
});

app.post(tableName, (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const content = req.body.content;

  const qr = `INSERT INTO JournalTable (title, date, content) VALUES (?,?,?)`;
  db.query(qr, [title, date, content], (err, result) => {
    console.log(result);
  });
});


app.delete(tableName + "/:id", (req, res) => {
  const qr = `DELETE FROM JournalTable WHERE id = ${req.params.id}`;
  db.query(qr, (err, result) => {
    if (err) {
      return res.status(400).send({ message: err });
    }
    // res.send(result);
  });
});

db.connect((err) => {
  if (err) {
    console.log(err, "dberr");
  }
  console.log("connected");
});

//app listen
app.listen(3001, () => {
  console.log("server running ...");
});
