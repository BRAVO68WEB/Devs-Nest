require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  sessionSecret: process.env.SESSION_SECRET,
  maailServer: process.env.MAIL_SERVER,
  mailUser: process.env.MAIL_USER,
  mailPassword: process.env.MAIL_PASSWORD,
  mailPort: process.env.MAIL_PORT,
  mailFrom: process.env.MAIL_FROM,
};
