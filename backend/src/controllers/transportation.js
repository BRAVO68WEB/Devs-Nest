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
            Name,
            PhoneNumber,
            RegistrationNo
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
            Name,
            PhoneNumber,
            RegistrationNo
        });

        const result = await transportation.save();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }  
};

