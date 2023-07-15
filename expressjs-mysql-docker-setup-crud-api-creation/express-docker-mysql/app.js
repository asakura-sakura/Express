const express = require("express");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "db",
  user: "root",
  password: "root",
  database: "test",
});

const app = express();

app.use(express.json()); // For parsing application/json

// CREATE
app.post("/items", (req, res) => {
  const { name, price } = req.body;

  db.query(
    "INSERT INTO items (name, price) VALUES (?, ?)",
    [name, price],
    (error, results) => {
      if (error) throw error;
      res.status(201).send(`Item added with ID: ${results.insertId}`);
    }
  );
});

// READ
app.get("/items", (req, res) => {
  db.query("SELECT * FROM items", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// UPDATE
app.put("/items/:id", (req, res) => {
  const { name, price } = req.body;

  db.query(
    "UPDATE items SET name = ?, price = ? WHERE id = ?",
    [name, price, req.params.id],
    (error, results) => {
      if (error) throw error;
      res.send(`Item updated with ID: ${req.params.id}`);
    }
  );
});

// DELETE
app.delete("/items/:id", (req, res) => {
  db.query(
    "DELETE FROM items WHERE id = ?",
    [req.params.id],
    (error, results) => {
      if (error) throw error;
      res.send(`Item deleted with ID: ${req.params.id}`);
    }
  );
});

app.listen(3000, "0.0.0.0", () => {
  console.log("サーバーがポート3000で起動しました");
});
