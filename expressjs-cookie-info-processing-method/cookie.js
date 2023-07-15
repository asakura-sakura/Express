const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  // Cookieの取得
  const cookies = req.cookies;

  const response = {
    cookies: cookies,
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
