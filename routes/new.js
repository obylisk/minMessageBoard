var express = require('express');
var router = express.Router();

/* GET user's info and message. */
router.get('/', function(req, res, next) {
  res.render('new', {title: 'New Message'});
});

module.exports = router;
