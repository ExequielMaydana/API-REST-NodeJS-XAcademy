const router = require('express').Router()

const authControllers = require('../controllers/auth.controllers')
const usersControllers = require('../controllers/users.controllers')

router.route('/crear-usuario', usersControllers.createUser)

router.route('/login')
    .post(authControllers.logIn)


module.exports = {
    router
}