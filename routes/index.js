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
      {id: '1', string: 'Question 1'},
      {id: '2', string: 'Question 2'},
      {id: '3', string: 'Question 3'},
    ],
    answer: answerString || 'Select your answer!'
  });
});

module.exports = router;
