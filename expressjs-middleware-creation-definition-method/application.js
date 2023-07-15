const express = require("express");
const app = express();

function myMiddleware(req, res, next) {
  // ミドルウェアの処理
  console.log("ミドルウェアの実行");
  next();
}

app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
