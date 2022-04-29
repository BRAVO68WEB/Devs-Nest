const express = require("express");
const router = express.Router();
const controllers = require("../controllers/transportation");

router.post("/create/transportation", controllers.bookTransportation);

module.exports = router;
