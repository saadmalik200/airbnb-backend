const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', userController.list)
router.delete('/delete/:_id', userController.delete)

module.exports = router