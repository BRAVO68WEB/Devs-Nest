const mongoose = require("mongoose");

const transportationSchema = new mongoose.Schema({
    StreamType:{
        type: String,
        enum:["FromUniversity", "ToUniversity"],
    },
    FromLocation: {
        type: String,
        enum : ['Phagwara Railway Stn.', 'Phagwara Bustop','Jhalander Cantt','Jhalander Stn.', "Chandidar Airport", null]
    },
    ToLocation: {
        type: String,
        enum : ['Phagwara Railway Stn.', 'Phagwara Busstop','Jhalander Cantt','Jhalander Stn.', "Chandidar Airport", null]
    },
    Date: {
        type: Date,
    },
    Time: {
        type: String,
    },
    NoOfPassengers: {
        type: Number,
    },
    NoOfLuggage: {
        type: Number,
    },
    Name: {
        type: String,
    },
    PhoneNumber: {
        type: String,
    },
    RegistrationNo: {
        type: Number,
    },
    isAttended: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

const Transportation  = mongoose.model("Transportation", transportationSchema);

module.exports = Transportation;