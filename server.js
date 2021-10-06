const express = require('express');
const dotenv = require('dotenv');

// Config env file 
dotenv.config({path: './config/config.env'});

// Connect to monodb database
// const connectDB = require('./config/db')
// connectDB();
// Routes files
const club = require('./api/club');



// Initiate the express app
const app = express();
const PORT = process.env.PORT || 5000;


// Routes of the API
app.use('/api/v1/club', club);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
}); 

