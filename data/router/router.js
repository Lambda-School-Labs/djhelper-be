const express = require('express')

const db = require('../models/models.js')

const router = express.Router();

//Get ALL DJs -- WORKS
router.get('/DJs', (req, res) => {
    db.getAllDJs()
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//Get DJs by ID -- WORKS
router.get('/DJs/:id', (req, res) => {
    const id = req.params.id;
    db.getDJsByID(id)
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router;