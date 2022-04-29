const User = require("../models/users");
const bcrypt = require("bcryptjs");
const { sendVerificationEmail } = require("../utils/mailer");
const { customAlphabet} = require("nanoid");
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvqxyz', 16)

var emailValidator = (email) => {
    var re = /^[a-z]+\.+[0-9_.+-]+@(lpu)\.in$/;
    return re.test(email);
}

module.exports.register = async (req, res, next) => {
    try {
        if (!req.body.Name) {
          return res.send({
            success: false,
            message: "Name Required",
          });
        }
        if(!emailValidator(req.body.Email)){
            return res.send({
                success: false,
                message: "Email is not valid",
              });
        }
        const isEmail = await User.countDocuments({
          Email: req.body.Email,
        });
    
        if (isEmail) {
          return res.send({
            success: false,
            message: "Email already Registered",
          });
        }
        const isRegistrationNo = await User.countDocuments({
            RegistrationNo: req.body.RegistrationNo,
        });
    
        if (isRegistrationNo) {
          return res.send({
            success: false,
            message: "RegistrationNo already registred",
          });
        }
        req.body.VerificationCode = nanoid();
        req.body.userType = "Student";           
        const user = User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(user.Password, salt);
    
        await user.save();

        const token = await user.generateAuthToken();
        sendVerificationEmail(user.Email, user.VerificationCode);
        return res.status(201).send({
          success: true,
          message: "User Sign Up Successfully",
          user,
          token,
        });
      } catch (e) {
        console.log(e);
        return res.status(400).send(e.message);
      }
    };

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findByCredentials(
          req.body.Email,
          req.body.Password
        );
        if (user) {
          const token = await user.generateAuthToken();
          return res.send({
            success: true,
            message: "User Sign In Successfully",
            token,
            user,
          });
        } else {
          return res.send({
            success: false,
            message: "User not exist",
          });
        }
      } catch (e) {
        return res.send({ success: false, message: e.message });
      }

};

module.exports.me = async (req, res) => {
    try {
      return res.send({ success: true, user: req.user });
    } catch (e) {
      return res.status(500).send({ success: false, error: e.message });
    }
  };

module.exports.verify = async (req, res) => {
    try {
      const user = await User.findOne({
        VerificationCode: req.params.token,
      });
      if (user) {
        user.VerificationCode = null;
        user.IsVerified = true;
        await user.save();
        return res.send({
          success: true,
          message: "User Verified Successfully",
          user,
        });
      } else {
        return res.send({
          success: false,
          message: "User not exist",
        });
      }
    } catch (e) {
      return res.status(500).send({ success: false, error: e.message });
    }
}