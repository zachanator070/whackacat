var express = require('express');
var router = express.Router();

var scores = [{name:"Zach", score:9000},{name:"Jeff", score:2}];

router.get('/',function(req,res){
  res.send(scores);
});

router.post('/',function(req,res){
  console.log('got score '+JSON.stringify(req.body));
  scores.push({name:req.body.name, score:parseInt(req.body.score)});
  res.sendStatus(200);
});

module.exports = router;
