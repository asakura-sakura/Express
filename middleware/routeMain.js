const express = require("express");
const app = express();
const myMiddleware = require("./routeMiddleware");

app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
