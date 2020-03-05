/* eslint-disable no-use-before-define */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');

const Dj = require('../models/models.js');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Login router is functioning.' });
});

router.post('/dj', (req, res) => {
  const { username, password } = req.body;

  Dj.findBy({ username })
    .first()
    .then(user => {
      if (user && password && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
          bio: user.bio,
          profile_pic_url: user.profile_pic_url,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid login' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/guest', (req, res) => {
  res.status(501).json({ message: 'Guest login not implemented.' });
});

// ========== Helper functions ===========

function signToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
