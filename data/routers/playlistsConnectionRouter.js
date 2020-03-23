const router = require('express').Router();
const db = require('../models/models.js');

//-----------------Playlist Connections-----------------\\

// Get ALL Playlist Connections
router.get('/', (req, res) => {
    db.getAllPlaylistConnects()
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // Get Playlist Connections by ID
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getPlaylistConnectsByID(id)
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // POST new Playlist Connections
  router.post('/', (req, res) => {
    const body = req.body;
    db.addPlaylistConnects(body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ err })
    })
  });
  
  // DEL Playlists
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.removePlaylistConnects(id)
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
    db.updatePlaylistsConnects(id, body)
    .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })

  module.exports = router;