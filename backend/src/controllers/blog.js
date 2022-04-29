const axios = require("axios");
const keys = require("../config/keys");
const Blogs = require("../models/blogs");

module.exports.createBlog = async (req, res, next) => {
    try {
        const { Title, Description, HeaderImage, Tags } = req.body;
        const blog = new Blogs({
        Title,
        Description,
        HeaderImage,
        Tags,
        });
        const result = await blog.save();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.ListBlogs = async (req, res, next) => {
    try {
        const blogs = await Blogs.find({});
        res.status(200).send(blogs);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.ContentOfBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const blog = await Blogs.findById(id);
        res.status(200).send(blog);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.UpdateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { Title, Description, HeaderImage, Tags } = req.body;
        const blog = await Blogs.findByIdAndUpdate(id, {
            Title,
            Description,
            HeaderImage,
            Tags,
        });
        res.status(200).send(blog);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.DeleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const blog = await Blogs.findByIdAndDelete(id);
        res.status(200).send(blog);
    } catch (err) {
        res.status(500).send(err);
    }
}    
