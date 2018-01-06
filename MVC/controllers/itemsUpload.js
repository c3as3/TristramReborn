require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');

var itemsSchema = mongoose.Schema({
    item: String,
    type: String,
    class: String
});


var item = mongoose.model('Items', itemsSchema);

//Controller
module.exports.itemsSubmitted = function(req,res){








   console.log('New Item submitted');
  //check form for input
  req.checkBody('item', 'Item is a required field.').notEmpty();
  req.checkBody('type', 'Type is a required field.').notEmpty();
  req.checkBody('class', 'Please type a Class.').notEmpty();





  var errors = req.validationErrors();
  if (errors) {

    console.log('errors on form ')
    console.log(errors);
  } else{

    var newItem ={
      item: req.body.item,
      type: req.body.type,
      class: req.body.class,
    }
console.log('New item Created');

//Upload created item to database
var sendItem = new item(newItem);
  sendItem.save(function(err, result){
    if(err){
      console.error('Errors on save');
      res.render('itemUpload');
    }else{
      res.render('itemUpload')
      console.log('New Item Succesfully saved in MongoDB')
    }

  })
}};

module.exports.itemForm = function(req, res, err){
  res.render('itemUpload');
  console.log('Items Upload Page Loaded')
};
