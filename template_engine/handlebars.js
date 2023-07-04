var express = require("express");
const handlebars = require("express-handlebars");

var app = express();
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.get("/", function (req, res) {
  const message = "Hello World";
  res.render("./hello", { message: message });
});
app.listen(3000, () => console.log("listening on http://localhost:3000"));
