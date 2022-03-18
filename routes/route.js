const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controller/controller");
const main = require("../controller/main");

router.route("/").get(main);
router.route("/dash").get(dashboard);
router.route("/login").post(login);

module.exports = router;
