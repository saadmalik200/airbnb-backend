const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/list", userController.list);
router.delete("/delete/:_id", userController.delete);

// wishlist routes
router.post("/wishlist/add", userController.addToWishlist);
router.post("/wishlist/delete", userController.removeFromWishlist);
router.get("/wishlist/list/:user", userController.listWishlist);

module.exports = router;
