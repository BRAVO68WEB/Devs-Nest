const mongoose = require("mongoose");

const residenceSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Phone: {
        type: String,
    },
    Type: {
        type: String,
        enum: ["Hostel", "Guest House", "Hostel & Guest House", "PG", "PG + Mess"],
    },
    GenderType: {
        type: String,
        enum: ["M", "F", "M/F"],
    },
    Description: {
        type: String,
    },
    Image: [{
        type: String,
    }],
    LocationAddress: {
        type: String,
    },
    LocationCity: {
        type: String,
    },
    LocationZip: {
        type: Number,
    },
    GoogleMapsPin: {
        type: String,
    },
    Price: {
        type: Number,
    },
    Features: {
        isWiFiAvailable: {
            type: Boolean,
        },
        isPowerBackupAvailable: {
            type: Boolean,
        },
        isLaundryAvailable: {
            type: Boolean,
        },
        isFoodAvailable: {
            type: Boolean,
        },
        isParkingAvailable: {
            type: Boolean,
        },
        isSecurityAvailable: {
            type: Boolean,
        },
        isWaterAvailable: {
            type: Boolean,
        },
        isACAvailable: {
            type: Boolean,
        },
        ExtraAmenities: {
            type: String,
        }
    },
    RoomsType: {
        type: String,
        enum: ["Single", "Double", "Triple", "Quad"],
    },
})

const Residence = mongoose.model("Residence", residenceSchema)

module.exports = Residence;