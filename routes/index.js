var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = {
    title: 'Spring Fling 2014'
  };
  
  res.render('index', data);
});

module.exports = router;
