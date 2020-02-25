const express = require('express')

const db = require('../models/models.js')

const router = express.Router();

//Get ALL DJ -- WORKS
router.get('/DJ', (req, res) => {
    db.getAllDJ()
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router;