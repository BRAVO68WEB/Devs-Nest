const express = require("express");
const router = express.Router();
const controllers = require("../controllers/food-lodging");

router.post("/create/store", controllers.createStore);
router.get("/view/store", controllers.viewAllStore);
router.get("/view/store/:id", controllers.viewStore);
router.post("/create/residence", controllers.createResidence);
router.get("/view/residence", controllers.viewAllResidence);
router.get("/view/residence/:id", controllers.viewResidence);
router.delete("/delete/residence/:id", controllers.deleteResidence);

module.exports = router;
