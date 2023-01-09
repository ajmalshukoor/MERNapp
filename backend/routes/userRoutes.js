const express = require('express');
const {loginUser, signupUser} = require('../controller/userController')

const router = express.Router()

//login router
router.post('/login', loginUser)

//signup router
router.post('/signup', signupUser)

module.exports = router