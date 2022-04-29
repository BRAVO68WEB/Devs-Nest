const Transportation = require("../models/transportation");

module.exports.bookTransportation = async (req, res, next) => {
    try {
        var {
            StreamType,
            FromLocation,
            ToLocation,
            Date,
            Time,
            NoOfPassengers,
            NoOfLuggage,            
        } = req.body;

        if(StreamType === "FromUniversity"){
            FromLocation = null;
        }
        else{
            ToLocation = null;
        }
        
        const transportation = new Transportation({
            StreamType,
            FromLocation,
            ToLocation,
            Date,
            Time,
            NoOfPassengers,
            NoOfLuggage,
            PhoneNumber: req.user.PhoneNumber,
            Name: req.user.Name,
            RegistrationNo: req.user.RegistrationNo,
        });

        const result = await transportation.save();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }  
};

module.exports.viewAllTransportation = async (req, res, next) => {
    try {
        if(req.user.userType === "Student"){
           return res.status(401).send("You are not authorized to view this page"); 
        }
        const transportations = await Transportation.find({}).sort({date: -1});
        res.status(200).send(transportations);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.viewTransportation = async (req, res, next) => {
    try {
        if(req.user.userType === "Student"){
            return res.status(401).send("You are not authorized to view this page"); 
         }
        const { id } = req.params;
        const transportation = await Transportation.findById(id);
        res.status(200).send(transportation);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.markAsAttended = async (req, res, next) => {
    try {
        const { id } = req.params;
        if(req.user.userType === "Student"){
            return res.status(401).send("You are not authorized to view this page"); 
         }
        const transportation = await Transportation.findById(id);
        transportation.isAttended = true;
        const result = await transportation.save();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}
