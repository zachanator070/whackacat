var express = require('express');
var router = express.Router();

var scores = [{name:"Zach", score:"9000"},{name:"Jeff", score:"2"}];

router.get('/',function(req,res){
  res.send(scores);
});

router.post('/',function(req,res){
  scores.append(res.body.score);
});

module.exports = router;
