const express = require("express");
const app = express();

const helloHandler = (req, res) => {
  res.send("Hello, Express!");
};

const userPostHandler = (req, res) => {
  const user = req.body;
  // ユーザーの作成処理など...
  res.json({ id: 1, name: user.name });
};

const userPutHandler = (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  // ユーザーの更新処理など...
  res.json({ id: userId, name: user.name });
};

const userDeleteHandler = (req, res) => {
  const userId = req.params.id;
  // ユーザーの削除処理など...
  res.json({ message: `User ${userId} has been deleted.` });
};

app.get("/hello", helloHandler);
app.post("/users", userPostHandler);
app.put("/users/:id", userPutHandler);
app.delete("/users/:id", userDeleteHandler);

app.listen(3000, () => {
  console.log("サーバーがポート3000で起動しました");
});
