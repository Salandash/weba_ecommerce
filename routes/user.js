var express = require('express');
var router = express.Router();
var mongojs = require('mongodb').MongoClient;

//Connect to the DB
mongojs.connect("mongodb://localhost:27017/users", function(err, db) {
    if(!err) {
      console.log("We are connected");
      var collection = db.collection('user');
    }
  

// Get All items
router.get('/cart', function(req, res, next){
    collection.find().toArray(function(err, items){
        if(err) {
            res.send(err);
            console.log("Error with User Collection");
        }
        res.json(items);
    });
       
});

// Get Single item
router.get('/user/:id', function(req, res, next){
    collection.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, item){
        if(err){
            res.send(err);
        }
        res.json(item);
    });
});

});

module.exports = router;