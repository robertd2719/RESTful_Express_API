const express = require('express');
const router = express.Router();

// get, push, patch, delete

// getting all
router.get('/',(req, res) => {
    res.status(200).json({msg: "receive all subscribers"});
})
// getting one
router.get('/:id',(req, res) => {
    res.status(200).json({ value: req.params.id});
})
// creating one --this is a post request as we are adding something to our db/collection
router.post('/',(req, res) => {
    
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