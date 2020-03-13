const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscribedToChannel:{
        type: String,
        required: true
    },
    subscribeDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

// the mongoose.model takes in two parameters the Model in the database
// we are working with and its schema
module.exports = mongoose.model('Subscriber',subscriberSchema)