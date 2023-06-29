const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("サーバーがポート3000で起動しました");
});
