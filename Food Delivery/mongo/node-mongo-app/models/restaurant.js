const mongoose = require('mongoose');
const RestaurantSchema = new mongoose.Schema({
    _name: {
        type: String,
        required: true,
    },
    _icon: {
        type: String,
        trim: true,
        required: true,
    },
    _address: {
        type: String,
        required: true,
    },
    _foodType: {
        type: String,
        required: true,
    }

},{versionKey: false});
const Restaurant = mongoose.model("Restaurant", RestaurantSchema, 'restaurants');
module.exports = Restaurant;
