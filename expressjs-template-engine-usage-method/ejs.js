var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  const message = "hello world";
  res.render("./hello.ejs", { message: message });
});

app.listen(3000, () => console.log("listening on http://localhost:3000"));
