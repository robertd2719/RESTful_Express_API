require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//define the application
const app = express();

// here we we are going to activate our database.
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open',() => console.log('DATABASE connection initiated successfully...'))

// here we are going to be creating our api endpoints 


const subscriberROUTES = require('./routes/subscribers.js');
app.use('/subscribers',subscriberROUTES);

app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello its working so far!!!');
})
// this port receives its information from the .env file which we could also have as a requirement in the npm process 
// instead of hard-coding it into our file with require
PORT = process.env.PORT || 5000;
// start the service
app.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`);

});