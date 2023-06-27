const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/myroute", (req, res, next) => {
  res.send("hello bitch , this is my new route");
});

module.exports = router;
