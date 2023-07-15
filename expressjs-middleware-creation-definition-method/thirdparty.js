const express = require("express");
const morgan = require("morgan");
const app = express();

// morganミドルウェアを使用してログを出力する
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
