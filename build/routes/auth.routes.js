"use strict";

var router = require('express').Router();
var authControllers = require('../controllers/auth.controllers');
router.route('/crear-usuario');
router.route('/login').post(authControllers.logIn);
module.exports = {
  router: router
};