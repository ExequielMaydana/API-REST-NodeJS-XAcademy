const express = require("express");
const { db } = require("./database");
const { initModels } = require("./models/initModels");
const { generateData } = require("./libs/startConfig");

const routesLibraries = require("./routes/libraries.routes").router;
const routesAuth = require("./routes/auth.routes").router;
const usersAuth = require("./routes/users.routes").router;
const booksRouter = require("./routes/books.routes").router;

const app = express();
initModels();
generateData();

db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Unable to connect to the database:", err));

db.sync({ force: false })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/library", routesLibraries);
app.use("/api/v1/auth", routesAuth);
app.use("/api/v1/users", usersAuth);
app.use("/api/v1/books", booksRouter);

app.get("/", (req, res) => {
  res.json({
    author: "Exe Dev",
    description: "API REST para manejo de librerias",
    version: "1.0.0",
  });
});

app.listen(8000, () => {
  console.log(`Server started at port 8000`);
});
