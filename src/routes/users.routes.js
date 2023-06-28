const router = require("express").Router();

const usersControllers = require("../controllers/users.controllers");

router.route("/create").post(usersControllers.createUser);

router.route("/:id").get(usersControllers.getUserById);

module.exports = {
  router,
};
