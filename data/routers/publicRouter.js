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

// DELETE -- WORKS
// TODO: Remove (Function moved to authRouter)
// router.delete("/delete-dj/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   db.removeDJ(id)
//     .then(info => {
//       res.status(200).json({ message: `${info} DJ(s) removed` });
//     })
//     .catch(res => {
//       res
//         .status(500)
//         .json({ error: "DELETE ERROR: You are not getting any DJ data back" });
//     });
// });

module.exports = router;
