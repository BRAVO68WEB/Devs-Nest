const express = require("express");
const router = express.Router();
const controllers = require("../controllers/transportation");

router.post("/book",  controllers.bookTransportation);
router.get("/viewAll",controllers.viewAllTransportation);
router.get("/view/:id",  controllers.viewTransportation);
router.patch("/markAsAttended/:id", controllers.markAsAttended);

module.exports = router;
