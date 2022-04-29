const express = require("express");
const router = express.Router();
const controllers = require("../controllers/transportation");
const middleware = require("../middlewares/auth");

router.post("/book",   middleware.auth, controllers.bookTransportation);
router.get("/viewAll",controllers.viewAllTransportation);
router.get("/view/:id",  controllers.viewTransportation);
router.patch("/markAsAttended/:id",  middleware.auth, controllers.markAsAttended);

module.exports = router;
