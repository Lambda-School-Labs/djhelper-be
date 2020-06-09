const router = require('express').Router();
const db = require('../../models/models.js');

// POST new Song
router.post('/', (req, res) => {
  const { body } = req;
  db.addSong(body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// DEL Song
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.removeSong(id)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT update Song
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  db.updateSong(id, body)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
