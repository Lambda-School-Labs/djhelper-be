const express = require('express')

const db = require('../models/models.js')

const router = express.Router();

//-----!!UN AUTHENTICATED ROUTES BELOW!!-----\\
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

//POST add a DJ-- WORKS
router.post('/register/DJ', (req, res) => {
    const body = req.body;
    db.addDJ(body)
    .then(info => {
        res.status(200).json(info)
    })
    .catch(ress => {
        res.status(500).json({error: "POST ERROR: You are not registering a DJ properly"})
    })
})

//-----!!AUTHENTICATED ROUTES BELOW!!-----\\


module.exports = router;