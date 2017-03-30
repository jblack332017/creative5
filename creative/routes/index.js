var express = require('express');
var router = express.Router();

/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/reviews'); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
Comment: String
});

var Review = mongoose.model('Review', commentSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reviews', function(req, res, next) {
console.log("POST comment route"); //[1]
var newcomment = new Review(req.body); //[3]
console.log(newcomment); //[3]
newcomment.save(function(err, post) { //[4]
  if (err) return console.error(err);
  console.log(post);
  res.sendStatus(200);
});
});




module.exports = router;
