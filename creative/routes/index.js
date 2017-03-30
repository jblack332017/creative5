var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var reviewSchema = mongoose.Schema({
    name: String,
    review: String,
    movie: String
});

var Review = mongoose.model('Review', reviewSchema);

var silence = new Review({ name: 'Silence',review: 'hey' });
console.log(silence.review); // 'Silence'



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reviews', function(req,res,nex) {
	console.log(req.body.name);
	var rev = new Review(req.body);
	console.log(rev);
	rev.save(function (err, fluffy) {
  if (err) return console.error(err);
  res.sendStatus(200);
});
	
});


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


router.get('/reviews/:movie', function(req, res, next) {
console.log("In the GET route?");
console.log(req.movie);
Review.find({ 'movie': req.movie }, function(err,commentList) { //Calls the find() method on your database
  if (err) return console.error(err); //If there's an error, print it out
  else {
    console.log(commentList); //Otherwise console log the comments you found
	res.json(commentList); //Then send the comments
    
    
  }
})
});



module.exports = router;
