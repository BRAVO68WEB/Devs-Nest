const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "mail.hirelance.app",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "verify@roadtolpu.in", // generated ethereal user
      pass: "bjecyTId,-,23", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Verify Bot" <verify@roadtolpu.in>', // sender address
    to: "jyotirmoy.12015646@lpu.in", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);