var express = require("express");
var app = express();
app.use("/virtual", express.static("public"));

app.listen(3000, () => console.log("listening on http://localhost:3000"));
