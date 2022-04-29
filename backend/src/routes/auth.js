const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auth");

router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.get("/verify/:token", controllers.verify);

module.exports = router;
