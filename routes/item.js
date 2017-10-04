var express = require('express');
var router = express.Router();
var mongojs = require('mongodb');
var db = mongojs('mongodb://Wjoseph:pitibole03@ds155414.mlab.com:55414/ecommerce', ['items']);

// Get All items
router.get('/items', function(req, res, next){
    db.items.find(function(err, items){
        if(err){
            res.send(err);
        }
        res.json(items);
    });
});

// Get Single item
router.get('/item/:id', function(req, res, next){
    db.items.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, item){
        if(err){
            res.send(err);
        }
        res.json(item);
    });
});

//Save item
router.post('/item', function(req, res, next){
    var item = req.body;
    if(!item.title || !(item.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.items.save(item, function(err, item){
            if(err){
                res.send(err);
            }
            res.json(item);
        });
    }
});

// Delete item
router.delete('/item/:id', function(req, res, next){
    db.items.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, item){
        if(err){
            res.send(err);
        }
        res.json(item);
    });
});

// Update item
router.put('/item/:id', function(req, res, next){
    var item = req.body;
    var upditem = {};
    
    if(item.isCart){
        upditem.isCart = item.isCart;
    }
    
    if(item.title){
        upditem.title = item.title;
    }
    
    if(!upditem){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.items.update({_id: mongojs.ObjectId(req.params.id)},upditem, {}, function(err, item){
        if(err){
            res.send(err);
        }
        res.json(item);
    });
    }
});

module.exports = router;