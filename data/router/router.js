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

//POST add a DJ-- WORKS BUT READING 500 ERROR <---
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

//POST to Login -- I THINK WORKS! 
router.post('/login/DJ', (req, res) => {
    // implement login
    let {username, password} = req.body;
    db.findBy({ username })
    .first()
    .then(user => {
        res.status(200).json({ message: `Welcome ${db.username}`})
      })
    .catch(err => {
      res.status(500).json(err)
    })
  });

  //Update DJ data -- WORKS BUT READING 500 ERROR <---
router.put('/updateDJ/:id', (req, res) => {
    const id = req.params.id;
    //const {description, notes} = req.body;
    const body = req.body;
    db.updateDJ(id, body)
    .then(story => {
        res.status(200).json(story);
      })
      .catch(err => {
        res.status(500).json({ error: "UPDATE ERROR: You are not getting DJ data back" });
      });
})

//DEL -- WORKS (Currently has 1 removed)
router.delete('/deleteDJ/:id', (req, res) => {
    const id = req.params.id;
    const {description, notes} = req.body;
    db.removeDJ(id)
    .then(story => {
        res.status(200).json({ message: `${story} removed`})
    })
    .catch(ress => {
        res.status(500).json({error: "DELETE ERROR: You are not getting any DJ data back"})
    })
})

//-----!!AUTHENTICATED ROUTES BELOW!!-----\\


module.exports = router;