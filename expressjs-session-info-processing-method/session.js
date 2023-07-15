const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "your secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.get("/", (req, res) => {
  // セッションの取得
  const sess = req.session;

  const response = {
    session: sess,
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
