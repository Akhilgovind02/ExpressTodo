const express = require('express')
const Router = express.Router()
const {Register,registerPage} = require('../controller/authController')


Router.get('/register',registerPage)

module.exports = Router