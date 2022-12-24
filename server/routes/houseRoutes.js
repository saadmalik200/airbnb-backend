const express = require("express");
const router = express.Router();

const houseController = require("../controllers/houseController");

router.post("/register", houseController.register);
// router.post('/login', userController.login)
// router.get('/list', userController.list)
// router.delete('/delete/:_id', userController.delete)

module.exports = router;
