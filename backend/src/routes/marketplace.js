const express = require("express");
const router = express.Router();
const controllers = require("../controllers/marketplace");

router.post("/item/post", controllers.enlistStudentItem);
router.get("/item/viewAll", controllers.viewAllItems);
router.get("/item/view/:id", controllers.viewItem);
router.get("/item/view/category/:category", controllers.viewItemByCategory);
router.patch("/item/markAsSold/:id", controllers.markAsSold);

module.exports = router;
