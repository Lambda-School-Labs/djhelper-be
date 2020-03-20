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

// Get a single location
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.findLocationById(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ================= Location Routes =====================

//POST new location 
router.post('/', (req, res) => {
  const body = req.body;
  db.addLocation(body)
  .then(data => {
      res.status(200).json(data)
  })
  .catch(err => {
      res.status(500).json({ err })
  })
});

// TODO: Check the behavior of this when it fails.

// DEL location 
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.removeLocation(id)
  .then(location => {
      res.status(200).json(location)
  })
  .catch(err => {
      res.status(500).json(err)
  })
});

// PUT update location 
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.updateLocation(id, body)
  .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  });


module.exports = router;
