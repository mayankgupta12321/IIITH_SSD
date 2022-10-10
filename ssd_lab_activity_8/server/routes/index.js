var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Url = require('../url');


router.get('/', function(req, res, next) {
    res.send("<h1>Hello World</h1>");
    // res.render('pages/home',{title: 'Shrts'});
});

router.get('/:shortCode', (req, res, next) => {
    var shortCode = req.params.shortCode;
    console.log(shortCode);
    Url.findOneAndUpdate({"shortCode": shortCode},{
      $set: {
      "lastAccessed": new Date()
      }
    },{
      new: true
    })
    .then((url) => {
      if(url) {
        res.send("<h1 style = \"color : green\">Long URL is : " + url.longUrl + "</h1>");
      }
        // res.redirect(url.longUrl);
      else {
        res.send("<h1>Page Not Found.</h1>");
      }
      },(err) => next(err))  
    .catch((err) => next(err));
  });

module.exports = router;