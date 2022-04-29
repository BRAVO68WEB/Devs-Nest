const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        match: [/^[a-z]+\.+[0-9_.+-]+@(lpu)\.in$/g, 'Please fill a valid email address']
    },
    Password: {
        type: String,
        required: true,
        minlength: 6,
    },
    RegistrationNo: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 6,
    },
    FirstName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    LastName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    PhoneNumber: {
        type: String,
        trim: true,
        minlength: 10,
        maxlength: 10,
        required: true,
    },
    Address: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    City: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    State: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    ZipCode: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    Country: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    IsDisabled: {
        type: Boolean,
        default: false,
    },
    IsActive: {
        type: Boolean,
        default: true,
    },
    IsVerified: {
        type: Boolean,
        default: false,
    },
    VerificationCode: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true
})


userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({
        _id: user._id.toString()
    }, process.env.JWT_SECRET);
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (Email, password) => {
    const user = await User.findOne({
        Email
    });

    if (!user) {
        throw new Error("Unable to find the user");
    }
    const isMatch = await bcrypt.compare(password, user.Password);

    if (!isMatch) {
        throw new Error("Incorrect Password");
    }
    return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;