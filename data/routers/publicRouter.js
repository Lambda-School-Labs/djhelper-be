const express = require("express");
const db = require("../models/models.js");

const router = express.Router();

/************************************************************
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

// Get ALL DJs -- WORKS
router.get("/djs", (req, res) => {
  db.getAllDJs()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get DJ by ID -- WORKS
router.get("/dj/:id", (req, res) => {
  const id = req.params.id;
  db.getDJsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// FIXME: Update DJ data -- WORKS BUT READING 500 ERROR <---
router.put("/update-dj/:id", (req, res) => {
  const id = req.params.id;
  //const {description, notes} = req.body;
  const body = req.body;
  db.updateDJ(id, body)
    .then(story => {
      res.status(200).json(story);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "UPDATE ERROR: You are not getting DJ data back" });
    });
});

// DELETE -- WORKS (Currently has 1 removed)
// FIXME: 1. Why is there a variable named "story"?
// 2. Why are we referencing description and notes in the message body?
// 3. Is "res" misspelled as "ress" in catch block?
router.delete("/delete-dj/:id", (req, res) => {
  const id = req.params.id;
  const { description, notes } = req.body;
  db.removeDJ(id)
    .then(story => {
      res.status(200).json({ message: `${story} removed` });
    })
    .catch(ress => {
      res
        .status(500)
        .json({ error: "DELETE ERROR: You are not getting any DJ data back" });
    });
});

module.exports = router;
