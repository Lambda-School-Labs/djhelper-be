const router = require('express').Router();

const TrackTbl = require('../models/trackModel');

router.get('/', (req, res) => {
  TrackTbl.getAllTracks()
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const newTrack = req.body;
  console.log('new track: ', newTrack);

  TrackTbl.addTrack(newTrack)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  TrackTbl.removeTrack(id)
    .then(deletedTrack => {
      res.status(200).json(`you have deleted ${deletedTrack} track`);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
