const express = require("express");
const router = express.Router();
const controllers = require("../controllers/marketplace");
const middleware = require("../middlewares/auth");

router.post("/item/post", middleware.auth, controllers.enlistStudentItem);
router.get("/item/viewAll", controllers.viewAllItems);
router.get("/item/view/:id", controllers.viewItem);
router.get("/item/view/category/:category", controllers.viewItemByCategory);
router.patch("/item/markAsSold/:id", middleware.auth, controllers.markAsSold);


module.exports = router;
