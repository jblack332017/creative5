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
    name: String
});

var Review = mongoose.model('Review', reviewSchema);
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});






module.exports = router;
