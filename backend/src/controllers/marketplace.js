const Marketplace = require("../models/marketplace");

module.exports.enlistStudentItem = async (req, res, next) => {
    try {
        const {
            ItemName,
            ItemDescription,
            ItemImage,
            ItemPrice,
            ItemLocation,
            ItemCategory,
            ItemCondition,
        } = req.body;

        var ItemOwner = {
            Name: req.user.Name,
            RegistrationNo: req.user.RegistrationNo,
        }

        const studentItem = new Marketplace({
            ItemName,
            ItemDescription,
            ItemImage,
            ItemPrice,
            ItemLocation,
            ItemCategory,
            ItemCondition,
            ItemOwner
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

module.exports.markAsSold = async (req, res, next) => {
    try {
        const { id } = req.params;
        // req.user.RegistrationNo
        const OriginalItem = await Marketplace.findById(id);
        if(OriginalItem.ItemOwner.RegistrationNo != req.user.RegistrationNo){
           return res.status(500).send("You are not allowed to mark this item as sold");
        };

        const item = await Marketplace.findByIdAndUpdate(id, {
            itemSold: true,
        });
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.listItemByOwner = async (req, res, next) => {
    try {
        const { RegistrationNo } = req.params;
        const items = await Marketplace.find({ ItemOwner: { RegistrationNo } });
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
}