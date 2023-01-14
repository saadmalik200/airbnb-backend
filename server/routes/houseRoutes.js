const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const houseController = require("../controllers/houseController");

router.post("/register", auth, houseController.register);
router.get("/list", houseController.list);
router.post("/search", houseController.search);
// router.delete('/delete/:_id', userController.delete)

module.exports = router;
