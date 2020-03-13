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
// creating one
// updating one
// deleting one
module.exports = router