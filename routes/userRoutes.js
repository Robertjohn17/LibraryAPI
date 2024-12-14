const express = require("express");
const registerController = require("../controllers/register");
const loginController = require("../controllers/user");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
