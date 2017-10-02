'use strict';
module.exports = function(app) {
  var List = require('../controllers/itemListController');

  // todoList Routes
  app.route('/item')
  route.get(itemList.list_all_items, function(req,res){
    res.send(req.List.itemList);
  });

  
  app.route('/item/:name')
    route.post(itemList.move_an_item, function(req, res){
      res.send(req.List.itemList);
    });
      
};