require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("asd");

  res.send("<h1>Imtiaz</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT} `);
});
