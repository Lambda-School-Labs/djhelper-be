const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Event router is functioning.' });
});

// ================== Event Routes ======================

router.post('/', (req, res) => {
  res.status(501).json({ message: 'New event not implemented.' });
});

router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Event get info not implemented.' });
});

router.put('/:id', (req, res) => {
  res.status(501).json({ message: 'Event update not implemented.' });
});

router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Event delete not implemented.' });
});

module.exports = router;
