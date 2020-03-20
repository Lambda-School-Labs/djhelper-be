const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Guest router is functioning.' });
});

// ================ Guest Routes ====================

router.post('/', (req, res) => {
  res.status(501).json({ message: 'New event not implemented.' });
});

router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Guest get info not implemented.' });
});

router.put('/:id', (req, res) => {
  res.status(501).json({ message: 'Guest update not implemented.' });
});

router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Guest delete not implemented.' });
});

module.exports = router;
