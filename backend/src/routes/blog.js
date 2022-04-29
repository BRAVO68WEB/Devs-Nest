const express = require("express");
const router = express.Router();
const controllers = require("../controllers/blog");
const middleware = require("../middlewares/auth");

router.post("/create", middleware.auth, controllers.createBlog);
router.post("/view", controllers.ListBlogs);
router.get("/view/:id", controllers.ContentOfBlog);
router.put("/update/:id", middleware.auth,controllers.UpdateBlog);
router.delete("/delete/:id", middleware.auth, controllers.DeleteBlog);

module.exports = router;
