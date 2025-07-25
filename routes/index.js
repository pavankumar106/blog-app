const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("Hello from the about route!");
});

module.exports = router;
