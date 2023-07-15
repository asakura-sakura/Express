const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/users/:id")
  .get((req, res) => {
    const userId = req.params.id;
    // ユーザーの取得処理など...
    res.json({ id: userId, name: "John Doe" });
  })
  .post((req, res) => {
    const user = req.body;
    // ユーザーの作成処理など...
    res.json({ id: 1, name: user.name });
  })
  .put((req, res) => {
    const userId = req.params.id;
    const user = req.body;
    // ユーザーの更新処理など...
    res.json({ id: userId, name: user.name });
  })
  .delete((req, res) => {
    const userId = req.params.id;
    // ユーザーの削除処理など...
    res.json({ message: `User ${userId} has been deleted.` });
  });

app.listen(3000, () => {
  console.log("サーバーがポート3000で起動しました");
});
