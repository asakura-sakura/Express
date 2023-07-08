const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(
  session({
    secret: "your secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "Strict",
    },
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs"); // 追加

// ログイン状態を確認するミドルウェア
function checkAuthenticated(req, res, next) {
  if (req.session.loggedin) {
    next();
  } else {
    res.redirect("/");
  }
}
app.get("/", (req, res) => {
  res.render("index"); // 修正
});
// ダッシュボードのルートハンドラ
app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard", { username: req.session.username });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  req.session.loggedin = true;
  req.session.username = username;

  res.redirect("/dashboard"); // ダッシュボードにリダイレクト
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
