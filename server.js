const express = require("express");
const path = require("path");

const app = express();
const buildDirectory = path.join(__dirname, "build");
const port = process.env.PORT || 3001;

app.use("/fashion-cube", express.static(buildDirectory));

app.get("/", (req, res) => {
  res.redirect("/fashion-cube");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(buildDirectory, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`FashionCube server listening on port ${port}`);
});