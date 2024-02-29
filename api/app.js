const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

// ---------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------------------

const allowOrigins = ["https://corentin-beaudet.fr"];

app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (allowOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } 
    else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

// --------------------------------------------------------------------

app.use('/admin', require('./routes/admin'));
app.use('/project', require('./routes/project'));

module.exports = app;