var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var dbUrl = 'mongodb://localhost:27017/reviews';
var collection
// Use connect method to connect to the Server
MongoClient.connect(dbUrl, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    // HURRAY!! We are connected. :)
    console.log('Connection established to', dbUrl);
    collection = db.collection('review');
    /**
     * TODO: insert data here, once we've successfully connected
     */
  }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/reviews', function(req, res) {
    console.log("In review Post");
    console.log(req.body);
    collection.insert(req.body, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "review" collection. The documents inserted with "_id" are:', result.length, result);
        res.end('{"success" : "Updated Successfully", "status" : 200}');
      }
    });
});


router.get('/reviews', function(req, res, next) {
console.log("In the GET route?");
collection.find(function(err,commentList) { //Calls the find() method on your database
  if (err) return console.error(err); //If there's an error, print it out
  else {
    console.log(commentList); //Otherwise console log the comments you found
	res.json(commentList); //Then send the comments
    
    
  }
})
});





module.exports = router;
