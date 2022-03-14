const express = require("express");
const router = express.Router();
const { userRegister, userInfo, userLogin } = require("../controller/userController");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/info", userInfo);

module.exports = router;
