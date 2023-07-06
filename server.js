const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

const homeRouter = require("./routes/main.routes");
app.use("/", homeRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
