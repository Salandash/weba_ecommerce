'use strict';


var mongoose = require('mongoose'),
  Item = mongoose.model('Items');

exports.list_all_item = function(req, res) {
  Task.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};
