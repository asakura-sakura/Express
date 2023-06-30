const express = require('express');
const app = express();

app.get("/", (req, res) => {
  // JSONレスポンスの生成
  const jsonResponse = {
    message: "This is a JSON response",
  };
  res.json(jsonResponse);

  // HTMLレスポンスの生成
  const htmlResponse = "<h1>This is an HTML response</h1>";
  res.type("text/html").send(htmlResponse);

  // レスポンスヘッダーの設定
  res.setHeader("Custom-Header", "Custom Value");

  // ステータスコードの設定
  res.status(201).send("Created");

  // リダイレクトの実行
  res.redirect("/new-location");

  // エラーレスポンスの生成
  const errorResponse = {
    error: "An error occurred",
  };
  res.status(500).json(errorResponse);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});