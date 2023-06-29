const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something went wrong");
});

// エラーハンドリングミドルウェア
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something went wrong");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
