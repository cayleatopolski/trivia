const express = require("express");
const scoresApi = express.Router();
const pool = require("./connection");

function sendScore(req, res) {
  pool.query("select * from scores").then(result => {
    res.send(result.rows);
  });
}

scoresApi.get("/scores", sendScore);

scoresApi.post("/scores", (req, res) => {
  pool
    .query("insert into scores (username, score) values ($1::text, $2::int)", [
      req.body.username,
      req.body.score
    ])
    .then(() => {
      sendScore(req, res);
    });
});

module.exports = scoresApi;
