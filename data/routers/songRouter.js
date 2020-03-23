const router = require('express').Router();
const db = require('../models/models.js');
//-----------------Songs-----------------\\

// Get ALL Songs 
router.get('/', (req, res) => {
    db.getAllSongs()
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // Get Song by ID 
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getSongsByID(id)
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // POST new Song
  router.post('/', (req, res) => {
    const body = req.body;
    db.addSong(body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ err })
    })
  });
  
  // DEL Song
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.removeSong(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        res.status(500).json(err)
    })
  })
  
  // PUT update Song
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.updateSong(id, body)
    .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })

  module.exports = router;