const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const PORT = 9090;

const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:'3306'
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/home', (req, res) => {
  const sqlSelect = "SELECT * FROM test";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running at port ${PORT}`);
});
