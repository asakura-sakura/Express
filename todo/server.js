// モジュールをインポートします
const express = require("express");
const app = express();
const path = require("path");

// HTMLファイルをホストするディレクトリを指定します。
app.use(express.static(path.join(__dirname, "public")));

// 一覧用の Todo を作成します
let todos = [
  { id: 1, text: "野球をする", completed: false },
  { id: 2, text: "ゲームをする", completed: false },
  { id: 3, text: "仕事をする", completed: false },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// '/todos'パスで Todo の一覧を取得します
app.get("/todos", (req, res) => {
  res.json({ todos });
});

// "/todos"パスに POST リクエストを送信して Todo を新しく作成します
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  res.json({ todo: newTodo });
});

// "/todos/:id"パスに PUT リクエストを送信して Todo を更新します
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  let todo = todos.find((t) => t.id == id);
  if (todo) {
    Object.assign(todo, req.body);
    res.json({ todo });
  } else {
    res.status(404).send({ message: "Todo が見つかりません" });
  }
});

// "/todos/:id"パスに DELETE リクエストを送信して Todo を削除します
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => t.id == id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: "Todo が削除されました" });
  } else {
    res.status(404).send({ message: "Todo が見つかりません" });
  }
});

// ポート 3000 番でサーバーをリッスンします
app.listen(3000, () => {
  console.log(`サーバーがポート3000でリッスン中です`);
});
