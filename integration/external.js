const express = require("express");
const axios = require("axios");

const app = express();

app.get("/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: "Error occurred" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
