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
//-----------------DJ's-----------------\\

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
  const id = req.params.id;
  db.getDJsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//-----------------Events-----------------\\

// Get ALL Events -- WORKS
router.get('/events', (req, res) => {
  db.getAllEvents()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Event by ID -- WORKS
router.get('/event/:id', (req, res) => {
  const id = req.params.id;
  db.getEventsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//-----All below will have to be moved to auth if needed 

// POST new event-- WORKS
router.post('/event/', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.addEvent(body)
  .then(event => {
      res.status(200).json({
        id: body.id,
        dj_id: body.dj_id,
        name: body.name,
        date: body.date,
        start_time: body.start_time,
        end_time: body.end_time,
        event_type: body.event_type,
        description: body.description,
        location_id: body.location_id,
        img_url: body.location_id
      })
  })
  .catch(err => {
      res.status(500).json({ err })
  })
})
// router.post('/event/', (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   db.addEvent(id, body)
//   .then(event => {
//       res.status(200).json({
//         id: id.id,
//         dj_id: body.dj_id,
//         name: body.name,
//         date: body.date,
//         start_time: body.start_time,
//         end_time: body.end_time,
//         event_type: body.event_type,
//         description: body.description,
//         location_id: body.location_id,
//         img_url: body.location_id
//       })
//   })
//   .catch(err => {
//       res.status(500).json({ err })
//   })
// })

// DEL event-- WORKS
router.delete('/event/:id', (req, res) => {
  const id = req.params.id;
  db.removeEvent(id)
  .then(event => {
      res.status(200).json(event)
  })
  .catch(err => {
      res.status(500).json(err)
  })
})

// PUT update event-- WORKS
router.put('/event/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.updateEvent(id, body)
  .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

//-----------------Locations-----------------\\

// Get ALL Locations -- WORKS
router.get('/locations', (req, res) => {
  db.getAllLocations()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Location by ID -- WORKS
router.get('/location/:id', (req, res) => {
  const id = req.params.id;
  db.getLocationsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//----- All below will have to be moved to auth if needed 

//POST new location -- WORKS
router.post('/location/', (req, res) => {
  const body = req.body;
  db.addLocation(body)
  .then(data => {
      res.status(200).json({
        id: body.id,
        address_line_1: body.address_line_1,
        address_line_2: body.address_line_2,
        city: body.city,
        state: body.state,
        zip: body.zip,
        name: body.name,
        phone: body.phone,
        website: body.website,
        email: body.email,
        img_url: body.img_url,
      })
  })
  .catch(err => {
      res.status(500).json({ err })
  })
})
// router.post('/dj', (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   db.findByLoc(id)
//     .first()
//     .then(data => {
//         res.status(200).json({
//           id: data.id,
//           address_line_1: data.address_line_1,
//           city: data.city,
//           address_line_2: data.address_line_2,
//           zip: data.zip,
//           state: data.state,
//           phone: data.phone,
//           name: data.name,
//           email: data.email,
//           website: data.website,
//           img_url: data.img_url,
//         });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// DEL location -- WORKS
router.delete('/location/:id', (req, res) => {
  const id = req.params.id;
  db.removeLocation(id)
  .then(location => {
      res.status(200).json(location)
  })
  .catch(err => {
      res.status(500).json(err)
  })
})

// PUT update location -- WORKS
router.put('/location/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.updateLocation(id, body)
  .then(location => {
      res.status(200).json(location);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

//-----------------Songs-----------------\\

// Get ALL Songs -- WORKS
router.get('/songs', (req, res) => {
  db.getAllSongs()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Song by ID -- WORKS
router.get('/song/:id', (req, res) => {
  const id = req.params.id;
  db.getSongsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//-----All below will have to be moved to auth if needed 

// POST new Song-- WORKS
router.post('/song/', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.addSong(body)
  .then(event => {
      res.status(200).json({
        id: body.id,
        name: body.name,
        spotify_id: body.spotify_id
      })
  })
  .catch(err => {
      res.status(500).json({ err })
  })
})

// DEL Song-- WORKS
router.delete('/song/:id', (req, res) => {
  const id = req.params.id;
  db.removeSong(id)
  .then(event => {
      res.status(200).json(event)
  })
  .catch(err => {
      res.status(500).json(err)
  })
})

// PUT update Song-- WORKS
router.put('/song/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.updateSong(id, body)
  .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

//-----------------Playlists-----------------\\

// Get ALL Playlists -- WORKS
router.get('/playlists', (req, res) => {
  db.getAllPlaylists()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Playlists by ID -- WORKS
router.get('/playlist/:id', (req, res) => {
  const id = req.params.id;
  db.getPlaylistsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//-----All below will have to be moved to auth if needed 

// POST new Playlists-- WORKS
router.post('/playlist/', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.addPlaylists(body)
  .then(event => {
      res.status(200).json(event)
  })
  .catch(err => {
      res.status(500).json({ err })
  })
})

// DEL Playlists-- WORKS
router.delete('/playlist/:id', (req, res) => {
  const id = req.params.id;
  db.removePlaylist(id)
  .then(event => {
      res.status(200).json(event)
  })
  .catch(err => {
      res.status(500).json(err)
  })
})

// PUT update Playlists-- WORKS
router.put('/playlist/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.updatePlaylists(id, body)
  .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

//-----------------Playlist Connections-----------------\\

// Get ALL Playlist Connections -- WORKS
router.get('/playlistconnects', (req, res) => {
  db.getAllPlaylistConnects()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Playlist Connections by ID -- WORKS
router.get('/playlistconnect/:id', (req, res) => {
  const id = req.params.id;
  db.getPlaylistConnectsByID(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// POST new Playlist Connections-- WORKS
router.post('/playlistconnect/', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  db.addPlaylistConnects(body)
  .then(event => {
      res.status(200).json(event)
  })
  .catch(err => {
      res.status(500).json({ err })
  })
})



module.exports = router;
