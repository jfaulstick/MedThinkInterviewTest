var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { 
    title: 'Joe Faulstick' 
  });
});

router.get('/quiz', function(req, res, next) {
  var answerString
  if (req.query.answer) {
    answerString = req.query.answer == 3 ? "Lie!" : "Truth!";
  }
  
  res.render('pages/quiz', {
    title: 'Quiz',
    questions: [
      {id: '1', string: 'Joe has worked on at least one "Game of the Year" winning title.'},
      {id: '2', string: 'Joe has visited 7 countries other than the US.'},
      {id: '3', string: 'Joe is born and raised in North Carolina.'},
    ],
    answer: answerString || 'Select your answer!'
  });
});

module.exports = router;
