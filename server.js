const express = require('express');
const dotenv = require('dotenv');

// Config env file 
dotenv.config({path: './config/config.env'});

// Connect to monodb database
// const connectDB = require('./config/db')
// connectDB();

// Routes of the API

// Initiate the express app
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
}); 

