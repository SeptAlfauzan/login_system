import express from "express";
const app = express();
const path = require("path");
const PORT = 8000;
const bodyParser = require("body-parser");
const RegisterRoute = require("./routers/registerRouter");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
// app.use(express.static(__dirname + "public"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.use("/register", RegisterRoute);

app.listen(PORT, (): void => {
  console.log(`app listen on http://localhost:${PORT}`);
});
