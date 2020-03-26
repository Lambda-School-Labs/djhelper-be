const router = require('express').Router();
const db = require('../models/models.js');

// POST new location
router.post('/', (req, res) => {
  const { body } = req;

  if (!body.address_line_1 || !body.city || !body.state || !body.zip) {
    res.status(400).json({ message: 'Missing required fields' });
  }

  db.addLocation(body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

// TODO: Check the behavior of this when it fails.

// DEL location
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.removeLocation(id)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT update location
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  db.updateLocation(id, body)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
