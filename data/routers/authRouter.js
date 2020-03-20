const router = require('express').Router();
const Dj = require('../models/models.js');
const djRouter = require('./djRouter.js');
const guestRouter = require('./guestRouter.js');
const eventRouter = require('./eventRouter.js');
const locationRouter = require('./locationRouter.js');

router.use('/dj', djRouter);
router.use('/guest', guestRouter);
router.use('/event', eventRouter);
router.use('/location', locationRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Auth router is functioning.' });
});

module.exports = router;
