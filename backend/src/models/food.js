const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    storeName: {
        type: String,
      },
      storeAddress: {
        type: String,
      },
      storePhone: {
        type: String,
      },
      location: {
        type: String,
      },
      isInsideCampus: {
        type: Boolean,
      },
      openTimesfrom: {
        type: String,
      },
      openTimesto: {
        type: String,
      },
      storeDesp: {
        type: String,
      },
},{
    timestamps: true
})

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;