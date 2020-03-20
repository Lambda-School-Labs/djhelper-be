const router = require('express').Router();
const db = require('../models/models.js');

//-----------------Playlists-----------------\\

// Get ALL Playlists 
router.get('/playlists', (req, res) => {
    db.getAllPlaylists()
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // Get Playlists by ID 
  router.get('/playlist/:id', (req, res) => {
    const id = req.params.id;
    db.getPlaylistsByID(id)
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // POST new Playlists
  router.post('/playlist/', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.addPlaylists(body)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        res.status(500).json({ err })
    })
  })
  
  // DEL Playlists
  router.delete('/playlist/:id', (req, res) => {
    const id = req.params.id;
    db.removePlaylist(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        res.status(500).json(err)
    })
  })
  
  // PUT update Playlists
  router.put('/playlist/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.updatePlaylists(id, body)
    .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })

  module.exports = router;