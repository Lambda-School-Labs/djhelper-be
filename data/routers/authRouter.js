const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Auth router is functioning." });
});

module.exports = router;

// ================ DJ Routes ====================

router.get("/dj/:id", (req, res) => {
  res.status(501).json({ message: "DJ get info not implemented." });
});

router.put("/dj/:id", (req, res) => {
  res.status(501).json({ message: "DJ update not implemented." });
});

router.delete("/dj/:id", (req, res) => {
  res.status(501).json({ message: "DJ delete not implemented." });
});

// ================ Guest Routes ====================

router.get("/guest/:id", (req, res) => {
  res.status(501).json({ message: "Guest get info not implemented." });
});

router.put("/guest/:id", (req, res) => {
  res.status(501).json({ message: "Guest update not implemented." });
});

router.delete("/guest/:id", (req, res) => {
  res.status(501).json({ message: "Guest delete not implemented." });
});
