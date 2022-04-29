const express = require("express");
const router = express.Router();

router.use("/", require("./home"));
// router.use("/blog", require("./blog"));
// router.use("/food-lodging", require("./food-lodging"));
// router.use("/marketplace", require("./marketplace"));
// router.use("/events", require("./events"));
// router.use("/transportation", require("./transportation"))
router.use("/auth", require("./auth"));

module.exports = router;
