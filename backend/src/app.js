const express = require("express");
const session = require("express-session");
const mdb = require("./config/mongodb");
const mongoStore = require("connect-mongo");
const keys = require("./config/keys");
const app = express();

app.use(express.json());

app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: mongoStore.create({
      clientPromise: mdb,
    }),
  })
);

app.use("/", require("./routes"));

app.listen(5000, () => {
  console.log("API listening on port 5000!");
});
