const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    Title:{
        type: String,
    },
    Description:{
        type: String,
    },
    HeaderImage: {
        type: String,
    },
    Tags:[{
        type: String
    }],
}, {
    timestamps: true
});

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;
