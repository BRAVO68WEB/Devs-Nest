const express = require("express");
const router = express.Router();
const controllers = require("../controllers/food-lodging");
const middleware = require("../middlewares/auth");

router.post("/create/store", middleware.auth, controllers.createStore);
router.get("/view/store", controllers.viewAllStore);
router.get("/view/store/:id", controllers.viewStore);
router.post("/create/residence", middleware.auth, controllers.createResidence);
router.get("/view/residence", controllers.viewAllResidence);
router.get("/view/residence/:id", controllers.viewResidence);
router.delete("/delete/residence/:id",middleware.auth,  controllers.deleteResidence);

module.exports = router;
