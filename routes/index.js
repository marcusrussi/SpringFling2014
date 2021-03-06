var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = {
    title: 'Spring Fling 2014',
    studentBands: [
      {
        name: 'Elgin and the Tonics', 
        type: 'student band', 
        startTime: '3:00pm', 
        image: 'images/elgin.jpg'
      },
      {
        name: 'The Rain Brigade', 
        type: 'student band', 
        startTime: '3:45pm', 
        image: 'images/therainbrigade.jpg',
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/36431686&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
      {
        name: 'Nero, My Panda', 
        type: 'student band', 
        startTime: '4:30pm', 
        image: 'images/neromypanda.jpg',
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/49978276&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
    ],
    artists: [
      {
        name: 'Fusion', 
        type: 'student dj', 
        startTime: '5:20pm', 
        image: 'images/kyleparsard.jpg', 
        student: true,
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10338768&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
      {
        name: 'Nick Mars/Candym&n', 
        type: 'student dj', 
        startTime: '5:40pm', 
        image: 'images/nickmars.jpg',
        student: true,
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12939707&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
      {
        name: 'Betty Who', 
        type: 'headliner', 
        startTime: '6:00pm', 
        image: 'images/bettywho.jpg',
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/15691787&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
      {
        name: 'La Vie en Twerk', 
        type: 'student dj', 
        startTime: '7:05pm', 
        image: 'images/lavieentwerk.jpg', 
        student: true,
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/42623980&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
      {
        name: 'Ja Rule', 
        type: 'headliner', 
        startTime: '7:30pm', 
        image: 'images/jarule.jpg'
        // soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6969243&amp;auto_play=false&amp;hide_related=false&amp;visual=true'
      },
      {
        name: 'towr', 
        type: 'student dj', 
        image: 'images/rockholt.jpg',
        startTime: '8:35pm', 
        student: true
      },
      {
        name: 'Diplo', 
        type: 'headliner', 
        startTime: '9:00pm', 
        image: 'images/diplo.jpg', 
        soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16730&amp;auto_play=false&amp;hide_related=false&amp;visual=true' 
      }
    ],
    foodTrucks: [
      {
        name: 'Ay! Arepa',  
        image: 'images/ayarepa.png',
      },
      {
        name: 'Caesus Cheese Truck',
        image: 'images/caseus.png',
      },
      {
        name: 'Elm City Kettle Corn',
        image: 'images/kettlecorn.png'
      },
      {
        name: 'Ricky D\'s Rib Shack',
        image: 'images/ribshack.png'
      },
      {
        name: 'Burrito Express',
        image: 'images/burrito.png'
      },
      {
        name: 'Cannoli Truck',
        image: 'images/cannolitruck.jpg'
      }
      // {
      //   name: 'Food Encounters LLC',
      //   image: 'images/foodencounters.png'
      // },
      // {
      //   name: 'Fryborg',
      //   image: 'images/fryborg.png'
      // },
      // {
      //   name: 'Tacuba',
      //   image: 'images/tacuba.jpg'
      // }
    ]
  };
  
  res.render('index', data);
});

module.exports = router;
