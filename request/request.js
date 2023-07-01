const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // リクエストヘッダーの取得
  const headers = req.headers;

  // クエリパラメータの取得
  const queryParam = req.query.param;

  const response = {
    headers: headers,
    queryParam: queryParam,
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
