const express = require ('express');
const router = express.Router()
const {userSaver, getUsers}= require('./userController')
router.post('/users', userSaver)
router.get('/user/all', getUsers)
module.exports = router