const express = require("express");
const router = express.Router();
const { createToken, verifyToken } = require("../controller/controller");
const main = require("../controller/main");
const authMiddleware = require("../middleware/auth");

//router
router.route("/").get(main);
router.route("/verify").get(authMiddleware, verifyToken);
router.route("/createtoken").post(createToken);

module.exports = router;
