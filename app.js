const express = require("express");
const app = express();
app.use(express.json());

let tasks = ["Learn Docker", "Learn Jenkins", "Deploy to AWS"];

app.get("/", (req, res) => {
  res.send("Welcome to Todo App — DevOps Project!");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.send("Task added!");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
