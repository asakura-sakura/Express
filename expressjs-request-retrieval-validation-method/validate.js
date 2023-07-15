const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
});

app.post("/users", (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, age } = req.body;

  // バリデーションが成功した場合の処理
  res.send({ message: "User created successfully", name, age });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
