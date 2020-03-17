const express = require('express');
const db = require('../models/models.js');

const router = express.Router();

/* ***********************************************************
  publicRouter
  -----------------------------------------------------------
  This file serves informational routes that
  are not protected and serves information that
  is available to the general public.
  -----------------------------------------------------------
  It is primarily for advertising of DJs and events.
  -----------------------------------------------------------
  The private versions of these routes are located
  under the authRouter endpoints.
  ******************************************************** */
// -----------------DJ's----------------- \\

// Get ALL DJs -- WORKS
router.get('/djs', (req, res) => {
  db.getAllDJs()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get DJ by ID -- WORKS
router.get('/dj/:id', (req, res) => {
  const { id } = req.params;
  db.getDJsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// -----------------Events----------------- \\

// TODO: Remove?
router.get('/events', (req, res) => {
  db.getAllEvents()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Remove?
router.get('/event/:id', (req, res) => {
  const { id } = req.params;
  db.getEventsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// -----All below will have to be moved to auth if needed

// TODO: Remove
router.post('/event/', (req, res) => {
  const { body } = req;
  db.addEvent(body)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Remove
router.delete('/event/:id', (req, res) => {
  const { id } = req.params;
  db.removeEvent(id)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Remove
router.put('/event/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  db.updateEvent(id, body)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// -----------------Locations----------------- \\

// TODO: Remove?
router.get('/locations', (req, res) => {
  db.getAllLocations()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Remove?
router.get('/location/:id', (req, res) => {
  const { id } = req.params;
  db.getLocationsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----- All below will have to be moved to auth if needed

// FIXME: Highest priority
// TODO: Remove
router.post('/location/', (req, res) => {
  const { body } = req;
  db.addLocation(body)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Remove
router.delete('/location/:id', (req, res) => {
  const { id } = req.params;
  db.removeLocation(id)
    .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: Remove
router.put('/location/:id', (req, res) => {
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
