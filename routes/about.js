var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, './html/about.html'));
});

module.exports = router;
