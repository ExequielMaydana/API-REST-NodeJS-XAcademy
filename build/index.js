"use strict";

var express = require("express");
var _require = require("./database"),
  db = _require.db;
var _require2 = require("./models/initModels"),
  initModels = _require2.initModels;
var _require3 = require("./libs/startConfig"),
  generateData = _require3.generateData;
var routesLibraries = require("./routes/libraries.routes").router;
var routesAuth = require("./routes/auth.routes").router;
var usersAuth = require("./routes/users.routes").router;
var booksRouter = require("./routes/books.routes").router;
var app = express();
initModels();
generateData();
db.authenticate().then(function () {
  return console.log("Connection has been established successfully.");
})["catch"](function (err) {
  return console.log("Unable to connect to the database:", err);
});
db.sync({
  force: false
}).then(function () {
  console.log("Database synced");
})["catch"](function (err) {
  return console.log(err);
});
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use("/api/v1/library", routesLibraries);
app.use("/api/v1/auth", routesAuth);
app.use("/api/v1/users", usersAuth);
app.use("/api/v1/books", booksRouter);
app.get("/", function (req, res) {
  res.json({
    author: "Exe Dev",
    description: "API REST para manejo de librerias",
    version: "1.0.0"
  });
});
app.listen(8000, function () {
  console.log("Server started at port 8000");
});