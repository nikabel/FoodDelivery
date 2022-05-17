const mongoose = require('mongoose');
const DishSchema = new mongoose.Schema({
    _name: {
        type: String,
        required: true,
    },
    _price: {
        type: Number,
        required: true,
    },
    _icon: {
        type: String,
        trim: true,
        required: true,
    },
    _description: {
        type: String,
        required: true,
    },
    _foodType: {
        type: String,
        required: true,
    },
    _weight: {
        type: Number,
        required: true,
    },
    _restaurantId: {
        type: String,
        required: true,
    }

},{versionKey: false});
const Dish = mongoose.model("Dish", DishSchema, 'dishes');
module.exports = Dish;
