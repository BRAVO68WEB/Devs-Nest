const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth");

router.use("/", require("./home"));
router.use("/blog", require("./blog"));
router.use("/food-lodging", require("./food-lodging"));
router.use("/marketplace", require("./marketplace"));
// router.use("/events", require("./events"));
router.use("/transportation", middleware.auth, require("./transportation"))
router.use("/auth", require("./auth"));

module.exports = router;