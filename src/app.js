import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { getUser } from "./api/user.js";

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/zaptic", function (req, res) {
  res.render("pages/zaptic");
});

app.get("/api/v1/users/:id", function (req, res) {
  getUser(req);
});

app.get("*", function (req, res) {
  res.render("pages/404");
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
