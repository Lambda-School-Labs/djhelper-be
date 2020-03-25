const router = require('express').Router();
const db = require('../models/models.js');

/* *********************************************************
  In this implementation, each event has exactly one playlist
  associated with it. These endpoints are located under /event.
  
  They update a single table only, and therefore do not have
  all CRUD operations.
  ******************************************************** */

// FIXME: Not a useful endpoint
// Get ALL Playlists
// router.get('/', (req, res) => {
//   db.getAllPlaylists()
//     .then(info => {
//       res.status(200).json(info);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

router.get('/', (req, res) => {
  const { query } = req;
  res.status(200).json({ request: query });
});

// Get Playlist by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.getPlaylistsByID(id) // FIXME: Singular/plural
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// FIXME: Not a useful endpoint.
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

// TODO: Refactor to add/remove songs.
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

// TODO: This may be useful: Remove all playlist entries.
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
