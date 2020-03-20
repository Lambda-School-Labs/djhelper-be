const router = require('express').Router();
const db = require('../models/models.js');

//-----------------Playlists-----------------\\

// Get ALL Playlists 
router.get('/', (req, res) => {
    db.getAllPlaylists()
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // Get Playlists by ID 
  router.get('/:id', (req, res) => {
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
  router.post('/', (req, res) => {
    const body = req.body;
    db.addPlaylists(body)
    .then(data => {
        res.status(200).json(body)
    })
    .catch(err => {
        res.status(500).json({ err })
    })
  });
  
  // DEL Playlists
  router.delete('/:id', (req, res) => {
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
  router.put('/:id', (req, res) => {
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