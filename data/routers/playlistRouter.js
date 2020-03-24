const router = require('express').Router();
const db = require('../models/models.js');

// -----------------Playlists----------------- \\

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

// Get Playlist by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.getPlaylistsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// POST new Playlist
router.post('/', (req, res) => {
  const { body } = req;
  db.addPlaylists(body)
    .then(data => {
      res.status(200).json(body); // FIXME: This sends back the same data and doesn't include the ID.
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// PUT update Playlist
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  db.updatePlaylists(id, body)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE Playlist
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.removePlaylist(id)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
