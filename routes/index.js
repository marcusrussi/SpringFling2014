var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = {
    title: 'Spring Fling 2014',
    studentBands: [
      {name: 'Student Band #1', type: 'student band', startTime: '3:00pm'},
      {name: 'The Rain Brigade', type: 'student band', startTime: '3:45pm'},
      {name: 'Nero, My Panda', type: 'student band', startTime: '4:30pm'},
    ],
    artists: [
      {name: 'Kyle Parsard aka Fusion', type: 'student dj', startTime: '5:20pm'},
      {name: 'Nick Mars', type: 'student dj', startTime: '5:40pm'},
      {name: 'Betty Who', type: 'headliner', startTime: '6:00pm'},
      {name: 'La Vie en Twerk', type: 'student dj', startTime: '7:05pm'},
      {name: 'Chance the Rapper', type: 'headliner', startTime: '7:30pm'},
      {name: 'Thomas Rokholt', type: 'student dj', startTime: '8:35pm'},
      {name: 'Diplo', type: 'headliner', startTime: '9:00pm'}
    ]

  };
  
  res.render('index', data);
});

module.exports = router;
