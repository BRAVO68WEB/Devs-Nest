const nodemailer = require("nodemailer");
const keys = require("../config/keys");

module.exports.sendVerificationEmail = async (email, token) => {
    let transporter = nodemailer.createTransport({
        host: keys.mailServer,
        port: keys.mailPort,
        secure: true, // true for 465, false for other ports
        auth: {
            user: keys.mailUser, // generated ethereal user
            pass: keys.mailPassword, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: keys.mailFrom, // sender address
        to: email, // list of receivers
        subject: "Email Verification", // Subject line
        text: "Verification email from RoadToLPU", // Messageplain text body
        html: `<b>Click to verify :- 
        <a href="https://localhost:5000/auth/verify/${token}">Verify</a></b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}