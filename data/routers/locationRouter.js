const router = require('express').Router();
const db = require('../models/models.js');

// Gets all locations
// TODO: Leave this here as "/location", eliminate it,
//       or use something like "location/all"?
router.get('/', (req, res) => {
  db.getAllLocations()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ================= Location Routes =====================

router.post('/', (req, res) => {
  const { body } = req;
  db.addLocation(body)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.findLocationByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Check the behavior of this when it fails.
router.put('/:id', (req, res) => {
  const { id } = req.params;
  db.removeLocation(id)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Check failure behavior.
router.delete('/:id', (req, res) => {
  const { id } = req.params.id;
  db.removeLocation(id)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
