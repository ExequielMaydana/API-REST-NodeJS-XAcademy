const router = require("express").Router();
const passport = require("passport");

const booksControllers = require("../controllers/books.controllers");
require("../middlewares/auth.middleware")(passport);
const { isAdmin } = require("../middlewares/authorization.middleware");

router
  .route("/create")
  .post(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    booksControllers.createBooks
  );

router.route("/").get(booksControllers.getAllBooks);

router
  .route("/:id")
  .get(booksControllers.getBookById)
  .put(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    booksControllers.editBook
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    isAdmin,
    booksControllers.deleteBook
  );

module.exports = {
  router,
};
