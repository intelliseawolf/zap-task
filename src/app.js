import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { getUser, addUser } from "./api/user.js";

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/zaptic", function (req, res) {
  res.render("pages/zaptic");
});

app.get("/api/v1/users/:id", function (req, res) {
  const user = getUser(req);
  res.send(user);
});

app.post("/api/v1/users", function (req, res) {
  const result = addUser(req);
  if (result) {
    res.status(200).send("Added user successfully!");
  } else {
    res.status(500);
  }
});

app.get("*", function (req, res) {
  res.render("pages/404");
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
