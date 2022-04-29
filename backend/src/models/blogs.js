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
    isDraft : {
        type: Boolean,
        default: false
    },
    isPublished : {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;
