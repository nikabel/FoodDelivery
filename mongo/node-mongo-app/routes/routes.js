const express = require('express');
const restModel = require('../models/restaurant');
const dishModel = require('../models/dish');
const Restaurant = require('../models/restaurant');
const app = express();
app.get('/api/restaurants', async (req, res) => {
    const restaurants = await restModel.find({});
    try {
        res.send(restaurants);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.get('/api/restaurants/:id', async (req, res) => {
    const restaurant = await restModel.findById(req.params.id);
    try {
        res.send(restaurant);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.post('/api/restaurants', async (req, res) => {
    const restaurant = new restModel(req.body);
    try {
        await restaurant.save();
        res.send(restaurant);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.post('/api/orders', async (req, res) => {
    const restaurant = req.body;
    try {
        await restaurant.save();
        res.send(restaurant);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.post('/api/dishes', async (req, res) => {
    try {
        const dish = await new dishModel({
        _name: req.body._name,
        _foodType: req.body._foodType,
        _description: req.body._description,
        _price: req.body._price,
        _icon: req.body._icon,
        _weight: req.body._weight,
        _restaurantId: req.body._restaurantId,
        }).save();
        res.status(201).json(dish);
        } catch (e) {
            res.status(500).send(e);
            console.log(e);
        }
});
app.get('/api/dishes', async (req, res) => {

    try {
        const dishes = await dishModel.find({});
        res.status(200).json(dishes);
        } catch (e) {
            res.status(500).send(e);
        }
});
app.get('/api/dishes/:id', async (req, res) => {
    const dishes = await dishModel.find({_restaurantId:req.params.id});

    try {
        res.send(dishes);

    } catch (e) {
        res.status(500).send(e);
    }
});
app.get('/api/dishes/:id', async (req, res) => {
    try {
        const dish = await dishModel.findById(req.params.id);
        res.status(200).json(dish);

    } catch (e) {
        res.status(500).send(e);
    }
});
app.get('/api/dishes', async (req, res) => {
    const dishes = await dishModel.find({});
    try {
        res.send(dishes);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.delete('/api/dishes/:id', async (req, res) => {
    try {
        await dishModel.remove({_id: req.params.id})
        res.status(200).json({message: 'Блюдо удалено'});
    } catch (e) {
        res.status(500).send(e);
    }
});
    
module.exports = app;
