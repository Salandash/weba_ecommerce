var express = require('express');
var router = express.Router();
var mongojs = require('mongodb').MongoClient;

//Connect to the DB
mongojs.connect("mongodb://localhost:27017/items", function(err, db) {
    if(!err) {
      console.log("We are connected");
      var collection = db.collection('items');
    }
  

// Get All items
router.get('/items', function(req, res, next){
    collection.find( { Quantity: { $gt: 0 } } , function(err, items){
        if(err){
            res.send(err);
        }
        res.json(items);
    });
});

// Get Single item
router.get('/item/:id', function(req, res, next){
    collection.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, item){
        if(err){
            res.send(err);
        }
        res.json(item);
    });
});

//Save item
router.post('/item', function(req, res, next){
    var item = req.body;
    if(!item.Name || item.Quantity == 0){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        collection.insert(item);
        console.log("Item Added!");
    }
});

// Delete item
router.delete('/item/:id', function(req, res, next){
    collection.remove({mykey: req.params.id}), {w:1} , function(err, item){
        if(err){
            res.send(err);
        }
        
        res.json(item);
    }
});

});

module.exports = router;