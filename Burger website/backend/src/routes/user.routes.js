const express = require('express')
const { registerUSer, loginUser, getUser, logOutUser } = require('../controller/user.controller')

const router = express.Router()

router.post("/register",registerUSer)
router.post('/login',loginUser)
router.post('/logout',logOutUser)
router.get("/get",getUser)


module.exports = router