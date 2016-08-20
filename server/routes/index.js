var mongoose = require('mongoose');
var express = require("express");
var router = express.Router();
var message = require('../models/model');

router.post('/', function(req, res)
{
 console.log(req);
 var DbSchema = new message({temp: req.body.temp,
pressure:  req.body.pressure,
humidity:  req.body.humidity,
temp_min:  req.body.temp_min,
temp_max:  req.body.temp_max});
 DbSchema.save(function (err)
 {
   if (err) {
     console.log(err);
    res.send('error');
   } else {
     console.log('Hello Saved');
     res.send(req.body);
   }
 });
});
module.exports=router;
