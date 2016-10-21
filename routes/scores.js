var express = require('express');
var router = express.Router();

var scores = [];

router.get('/',function(req,res){
  req.send(scores);
});

router.post('/',function(req,res){
  scores.append(res.body.score);
});

module.exports = router;
