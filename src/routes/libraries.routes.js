const router = require("express").Router();
const passport = require("passport");

const libariesController = require("../controllers/libraries.controllers");
require("../middlewares/auth.middleware")(passport);
const { isAdmin } = require("../middlewares/authorization.middleware");

router
  .route("/create")
  .post(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    libariesController.createLibrary
  );

router.route("/").get(libariesController.getAllLibraries);

router
  .route("/:id")
  .get(libariesController.getLibraryById)
  .put(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    libariesController.editLibrary
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    libariesController.deleteLibrary
  );

router
  .route("/:id/addBook")
  .post(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    libariesController.addBook
  );

module.exports = {
  router,
};
