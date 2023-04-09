const mongoose = require("mongoose");

module.exports = async () => {
    await mongoose.connect(process.env.MONGO_URI = "mongodb+srv://axadxonshuhratov0:axw11206@cluster0.ovnqwtk.mongodb.net/product");
}