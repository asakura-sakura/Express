const express = require("express");
const app = express();

// express.staticミドルウェアを使用して静的ファイルを提供する
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
