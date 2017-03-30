var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviewDB');

var reviewSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
Review: String,
Movie: String
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
console.log("POST comment route"); //[1]
console.log(req.body); //[2]

var newreview = new Review(req.body); //[3]
console.log(newreview); //[3]
newreview.save(function(err, post) { //[4]
   if (err) return console.error(err);
   console.log(post);
res.sendStatus(200);
 });

});


/* GET comments from database */
router.get('/reviews', function(req, res, next) {
console.log("In the GET route?");
Review.find(function(err,commentList) { //Calls the find() method on your database
  if (err) return console.error(err); //If there's an error, print it out
  else {
    console.log(commentList); //Otherwise console log the comments you found
	res.json(commentList); //Then send the comments
    
    
  }
})
});


module.exports = router;
