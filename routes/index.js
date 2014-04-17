var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = {
    title: 'Spring Fling 2014',
    studentBands: [
      {name: 'Student Band #1',type: 'student band', startTime: '3:00pm', image: 'images/placeholder.gif'},
      {name: 'The Rain Brigade', type: 'student band', startTime: '3:45pm', image: 'images/therainbrigade.jpg'},
      {name: 'Nero, My Panda', type: 'student band', startTime: '4:30pm', image: 'images/neromypanda.jpg'},
    ],
    artists: [
      {name: 'Kyle Parsard aka Fusion', type: 'student dj', startTime: '5:20pm', image: 'images/kyleparsard.jpg', student: true},
      {name: 'Nick Mars', type: 'student dj', startTime: '5:40pm', student: true},
      {name: 'Betty Who', type: 'headliner', startTime: '6:00pm', image: 'images/bettywho.jpg'},
      {name: 'La Vie en Twerk', type: 'student dj', startTime: '7:05pm', image: 'images/lavieentwerk.jpg', student: true},
      {name: 'Chance the Rapper', type: 'headliner', startTime: '7:30pm', image: 'images/chance.jpg'},
      {name: 'Thomas Rokholt', type: 'student dj', startTime: '8:35pm', student: true},
      {name: 'Diplo', type: 'headliner', startTime: '9:00pm', image: 'images/diplo.jpg'}
    ]

  };
  
  res.render('index', data);
});

module.exports = router;
