const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber.js');

// get, push, patch, delete

// getting all
router.get('/', async(req, res) => {
    try{
        // we make a call here to our Subscriber model which takes time to access the db
        // and then we store the results in our subscribers variable.
        const subscribers = await Subscriber.find();
        res.json(subscribers)
    } catch(error){
        // 500 status means that the database had an error.
        res.status(500).json({message: error.message})
    }
})


// GETTING ONE:
router.get('/:id',(req, res) => {
    res.status(200).json({ value: req.params.id});
})


// CREATING ONE: --this is a post request as we are adding something to our db/collection
router.post('/', async(req, res) => {
    // make a new subscriber based on our pre-defined and imported model Schema: subscriber
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try{
        // we are going to try to save subscriber object to the database with subscriber.save()
        // then save the returned object in a new variable when/if the server responds.
        const newSubscriber = await subscriber.save();
        // the 201 status returns that an object has been successfully created.
        res.status(201).json(newSubscriber)
    } catch (error) {
        // 400 error means that the user gave us bad data.
        res.status(400).json({message: error.message})
    }
})


// updating one, we are using path instead of put as we are only going to be updating based
// solely on what the user is actually passing to us. PUT would update all of the information
// to the subscriber at once and this is behavior that is not intended.
router.patch('/:id',(req, res) => {
    
})

// deleting one
router.delete('/:id',(req,res) => {
    
})
module.exports = router