const express = require("express");
const questionApi = express.Router();
const pool = require("./connection");

function sendQuestions(req, res) {
  pool
    .query("select * from questions order by random() limit 10")
    .then(result => {
      res.send(result.rows);
    });
}

questionApi.get("/questions", sendQuestions);

module.exports = questionApi;
