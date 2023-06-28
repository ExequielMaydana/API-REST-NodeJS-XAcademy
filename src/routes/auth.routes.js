const router = require('express').Router()

const authControllers = require('../controllers/auth.controllers')

router.route('/crear-usuario')

router.route('/login')
    .post(authControllers.logIn)


module.exports = {
    router
}