const router = require('express').Router();
const db = require('../models/models.js');

//-----------------Playlist Connections-----------------\\

// Get ALL Playlist Connections
router.get('/playlistconnects', (req, res) => {
    db.getAllPlaylistConnects()
      .then(info => {
        res.status(200).json(info);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  // Get Playlist Connections by ID
  router.get('/playlistconnect/:id', (req, res) => {
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
  router.post('/playlistconnect/', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.addPlaylistConnects(body)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        res.status(500).json({ err })
    })
  })
  
  // DEL Playlists
  router.delete('/playlistconnect/:id', (req, res) => {
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
  router.put('/playlistconnect/:id', (req, res) => {
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