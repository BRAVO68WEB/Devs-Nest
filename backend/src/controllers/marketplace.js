const Marketplace = require("../models/marketplace");

module.exports.enlistStudentItem = async (req, res, next) => {
    try {
        const {
            itemName,
            itemDescription,
            itemImage,
            itemPrice,
            itemLocation,
            itemCategory,
            itemCondition,
            itemOwner,
        } = req.body;
        const studentItem = new Marketplace({
            itemName,
            itemDescription,
            itemImage,
            itemPrice,
            itemLocation,
            itemCategory,
            itemCondition,
            itemOwner,
        });
        const result = await studentItem.save();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.viewAllItems = async (req, res, next) => {
    try {
        const items = await Marketplace.find({});
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.viewItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Marketplace.findById(id);
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.viewItemByCategory = async (req, res, next) => {
    try {
        const { category } = req.params;
        const items = await Marketplace.find({ itemCategory: category });
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.markItemSold = async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Marketplace.findByIdAndUpdate(id, {
            itemSold: true,
        });
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
}