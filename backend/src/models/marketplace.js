const mongoose = require("mongoose");

const marketplaceSchema = new mongoose.Schema({
    ItemName: {
        type: String,
    },
    ItemDescription: {
        type: String,
    },
    ItemImage: {
        type: String,
    },
    ItemPrice: {
        type: Number,
    },
    ItemCategory: {
        type: String,
        enum: ["Electronics", "Furniture", "Clothing", "Books", "Others"],
    },
    ItemCondition: {
        type: String,
        enum: ["New", "Used"],
    },
    ItemOwner: {
        Name: {
            type: String,
        },
        RegistrationNo: {
            type: Number,
        }
    },
    itemSold: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Marketplace = mongoose.model("Marketplace", marketplaceSchema);

module.exports = Marketplace;