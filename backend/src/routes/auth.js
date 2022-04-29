const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auth");
const middleware = require("../middlewares/auth");

router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.get("/me", middleware.auth,controllers.me);
router.get("/verify/:token", controllers.verify);

module.exports = router;
