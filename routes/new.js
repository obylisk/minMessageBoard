var express = require('express');
var router = express.Router();

//??????
/* GET user's info and message. */
router.get('/', (req, res, next) => {
  res.send('respond with resource'});
});

module.exports = router;
