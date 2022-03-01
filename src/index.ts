import express from "express";
const app = express();
const path = require("path");
const PORT = 8000;
import bodyParser from "body-parser";
const RegisterRoute = require("./routers/registerRouter");
const AuthRoute = require("./routers/authRouter");
const MainRoute = require("./routers/mainRouter");
const DashboardRoute = require("./routers/dashboardRouter");

import session from "express-session";

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "XCR3rsasa%RDHHH",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
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
// routes
app.use("/", MainRoute);
app.use("/dashboard", DashboardRoute);
app.use("/auth", AuthRoute);
app.use("/register", RegisterRoute);

app.listen(PORT, (): void => {
  console.log(`app listen on http://localhost:${PORT}`);
});
