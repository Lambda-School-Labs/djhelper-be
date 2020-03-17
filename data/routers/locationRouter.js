const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Location router is functioning.' });
});

// ================= Location Routes =====================

router.post('/', (req, res) => {
  res.status(501).json({ message: 'New location not implemented.' });
});

router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Location get info not implemented.' });
});

router.put('/:id', (req, res) => {
  res.status(501).json({ message: 'Location update not implemented.' });
});

router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Location delete not implemented.' });
});

module.exports = router;
