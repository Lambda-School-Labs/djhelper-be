const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Register router is functioning." });
});

router.post("/dj", (req, res) => {
  res.status(501).json({ message: "DJ registration not implemented." });
});

router.post("/guest", (req, res) => {
  res.status(501).json({ message: "Guest registration not implemented." });
});

module.exports = router;
