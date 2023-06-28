"use strict";

var router = require("express").Router();
var passport = require("passport");
var libariesController = require("../controllers/libraries.controllers");
require("../middlewares/auth.middleware")(passport);
var _require = require("../middlewares/authorization.middleware"),
  isAdmin = _require.isAdmin;
router.route("/create").post(passport.authenticate("jwt", {
  session: false
}), isAdmin, libariesController.createLibrary);
router.route("/").get(libariesController.getAllLibraries);
router.route("/:id").get(libariesController.getLibraryById).put(passport.authenticate("jwt", {
  session: false
}), isAdmin, libariesController.editLibrary)["delete"](passport.authenticate("jwt", {
  session: false
}), isAdmin, libariesController.deleteLibrary);
router.route("/:id/addBook").post(passport.authenticate("jwt", {
  session: false
}), isAdmin, libariesController.addBook);
module.exports = {
  router: router
};