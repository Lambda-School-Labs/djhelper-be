const router = require('express').Router();
const db = require('../../models/models.js');

/* *********************************************************
  In this implementation, each event has exactly one playlist
  associated with it. These endpoints are located under /event.
  
  They update a single table only, and therefore do not have
  all CRUD operations.
  ******************************************************** */

// Add a song to a playlist
// Event ID must be included in URL (...playlist?event=n)
router.post('/', (req, res) => {
  // const { event } = req.query;
  const { body } = req;
  const songId = body.song_id;
  const queueNum = body.queue_num;
  const eventId = body.event_id;

  if (!eventId) {
    res.status(400).json({ message: 'No event ID specified' });
  }
  if (!songId || !queueNum) {
    res.status(400).json({ message: 'Missing required fields' });
  }

  const newEntry = {
    event_id: eventId,
    song_id: songId,
    queue_num: queueNum
  };

  db.addPlaylistEntry(newEntry)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT update Playlist
router.put('/entry/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;

  // TODO: Only allow queue order to be changed here

  db.updatePlaylistEntry(id, body)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE Playlist entry
router.delete('/entry/:id', (req, res) => {
  const { id } = req.params;
  db.removePlaylistEntry(id)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
