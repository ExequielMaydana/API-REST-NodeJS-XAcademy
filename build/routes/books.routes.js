"use strict";

var router = require("express").Router();
var passport = require("passport");
var booksControllers = require("../controllers/books.controllers");
require("../middlewares/auth.middleware")(passport);
var _require = require("../middlewares/authorization.middleware"),
  isAdmin = _require.isAdmin;
router.route("/create").post(passport.authenticate("jwt", {
  session: false
}), isAdmin, booksControllers.createBooks);
router.route("/").get(booksControllers.getAllBooks);
router.route("/:id").get(booksControllers.getBookById).put(passport.authenticate("jwt", {
  session: false
}), isAdmin, booksControllers.editBook)["delete"](passport.authenticate("jwt", {
  session: false
}), isAdmin, booksControllers.deleteBook);
module.exports = {
  router: router
};