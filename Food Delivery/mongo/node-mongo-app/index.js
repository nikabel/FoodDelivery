const express = require('express');
const db = require('./config/db');
const mongoose = require('mongoose');
const router = require('./routes/routes.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
    if (req.method === "OPTIONS") {
        return res.status(200);
    }
    return next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.options('*', cors());
app.use(bodyParser.json());
app.use(router);

async function start() {
    try {
        await mongoose.connect(db.url, {
            useNewUrlParser: true
        });

        app.listen(PORT, () => {
            console.log('Listening on ' + PORT);
        })

    } catch (e) {
        console.error(e);
    }
}

start();
