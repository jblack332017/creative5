var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commentDB');

var reviewSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
review: String
});
var Review = mongoose.model('Review', reviewSchema); 


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addComment', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("POST comment route"); //[1]
  console.log(req.body); //[2]
  var newreview = new Review(req.body); //[3]
	console.log(newreview); //[3]
	newreview.save(function(err, post) { //[4]
  if (err) return res.send();
  console.log(post);
  res.sendStatus(200);
});
});

module.exports = router;
