const Food = require("../models/food");
const Residence = require("../models/residence");
module.exports.createStore = async (req, res, next) => {
    if(req.user.userType === "Admin")
    {
        try {
            const {
                storeName,
                storeAddress,
                storePhone,
                location,
                isInsideCampus,
                openTimes
            } = req.body;
            const food = new Food({
                storeName,
                storeAddress,
                storePhone,
                location,
                isInsideCampus,
                openTimes
            });
            const result = await food.save();
            res.status(200).send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    else{
        res.status(403).send("You are not authorized to perform this action");
    }
};

module.exports.viewAllStore = async (req, res, next) => {
    try {
        const stores = await Food.find({});
        res.status(200).send(stores);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.viewStore = async (req, res, next) => {
    try {
        const { id } = req.params;
        const store = await Food.findById(id);
        res.status(200).send(store);
    } catch (err) {
        res.status(500).send(err);
    }
}


module.exports.createResidence = async (req, res, next) => {
    if(req.user.userType === "Admin"){
        try {
            const {
                Name,
                Phone,
                Type,
                Description,
                Image,
                LocationAddress,
                LocationCity,
                LocationZip,
                GoogleMapsPin,
                Price,
                Features,
                RoomsType
            } = req.body;
            const residence = new Residence({
                Name,
                Phone,
                Type,
                Description,
                Image,
                LocationAddress,
                LocationCity,
                LocationZip,
                GoogleMapsPin,
                Price,
                Features,
                RoomsType
            });
            const result = await residence.save();
            res.status(200).send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    else{
        res.status(403).send("You are not authorized to perform this action");
    }
    
};

module.exports.deleteResidence = async (req, res, next) => {
    if(req.user.userType === "Admin"){
    try {
        const { id } = req.params;
        const residence = await Residence.findByIdAndDelete(id);
        res.status(200).send(residence);
    } catch (err) {
        res.status(500).send(err);
    }}
    else{
        res.status(403).send("You are not authorized to perform this action");
    }
}

module.exports.viewAllResidence = async (req, res, next) => {
    try {
        var {minValue, maxValue} = req.query;
        const residences = await Residence.find({
        price: {$gte: maxValue, $lte: minValue}
        }).sort({price:1});
        res.status(200).send(residences);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.viewResidence = async (req, res, next) => {
    try {
        const { id } = req.params;
        const residence = await Residence.findById(id);
        res.status(200).send(residence);
    } catch (err) {
        res.status(500).send(err);
    }
}