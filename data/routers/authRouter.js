const router = require('express').Router();
const djRouter = require('./authRouter/djRouter.js');
const guestRouter = require('./authRouter/guestRouter.js');
const eventRouter = require('./authRouter/eventRouter.js');
const playlistRouter = require('./authRouter/playlistRouter');
const songRouter = require('./authRouter/songRouter.js');

router.use('/dj', djRouter);
router.use('/guest', guestRouter);
router.use('/event', eventRouter);
router.use('/playlist', playlistRouter);
router.use('/song', songRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Auth router is functioning.' });
});

module.exports = router;
