const express = require("express");
const app = express();
const port = 8080;
const questionApi = require("./question.api");
const scoresApi = require("./scores.api");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", questionApi);
app.use("/", scoresApi);

app.listen(port, () => console.log(`server is running on port: ${port}`));
