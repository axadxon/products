const {Schema, model} = require("mongoose");

const ProductSchema = new Schema({
    products: String,
})


module.exports = model("products", ProductSchema)