// モジュールをインポートします
const express = require("express");
const app = express();
const path = require("path");

// HTMLファイルをホストするディレクトリを指定します。
app.use(express.static(path.join(__dirname, "views")));
app.use(express.json());

// ユーザーを保存するための仮のデータストア
let users = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/users", (req, res) => {
  // ユーザーデータをレスポンスとして返す
  res.json(users);
});

app.post("/users", (req, res) => {
  // リクエストボディからユーザーデータを取得
  const user = req.body;
  // ユーザーをデータストアに追加
  users.push(user);
  // 新しく作成されたユーザーをレスポンスとして返す
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
