const mongoose =  require("mongoose")

const ProductSchema = new mongoose.Schema({
title: String,
details: String,
price: Number,

})

module.exports= mongoose.model("Product", ProductSchema)