const express = require("express");
const app = express();
const router = express.Router();

router.use(express.json());

router.get("/hello", (req, res) => {
  res.send("Hello, Express!");
});

router.post("/users", (req, res) => {
  const user = req.body;
  // ユーザーの作成処理など...
  res.json({ id: 1, name: user.name });
});

router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  // ユーザーの更新処理など...
  res.json({ id: userId, name: user.name });
});

router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  // ユーザーの削除処理など...
  res.json({ message: `User ${userId} has been deleted.` });
});

app.use(router);

app.listen(3000, () => {
  console.log("サーバーがポート3000で起動しました");
});
