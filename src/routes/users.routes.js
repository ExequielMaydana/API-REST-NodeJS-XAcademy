const router = require("express").Router();
const passport = require("passport");

const usersControllers = require("../controllers/users.controllers");
require("../middlewares/auth.middleware")(passport);

router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersControllers.getUserById
  );

module.exports = {
  router,
};
