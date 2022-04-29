const express = require("express");
const router = express.Router();
const controllers = require("../controllers/blog");

router.post("/create", controllers.createBlog);
router.post("/view", controllers.ListBlogs);
router.get("/view/:id", controllers.ContentOfBlog);
router.put("/update/:id", controllers.UpdateBlog);
router.delete("/delete/:id", controllers.DeleteBlog);

module.exports = router;
