require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
var multer = require('multer')

var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});

var upload = multer({ storage : storage }).array('img');

//Controller
module.exports.itemsSubmitted = function(req,res){

  var itemsSchema = mongoose.Schema({
      item: String,
      type: String,
      class: String,
      img:
       { data: Buffer, contentType: String }
  });


  var item = mongoose.model('Items', itemsSchema);






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
      _file: req.body.img
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












//   item.remove(function (err) {
//
//       if (err) throw err;
//
//       console.error('removed old docs');
//   var item = new Item;
//
//       item.img.data = fs.readFileSync(imgPath);
//
//       item.img.contentType = 'image/jpg';
//
//       item.save(function (err, item) {
//
//         if (err) throw err;
// console.error('saved img to mongo');
//
// res.render('itemupload',function (req, res, next) {
//
//         item.findById(a, function (err, doc) {
//
//           if (err) return next(err);
//
//           res.contentType(doc.img.contentType);
//
//           res.send(doc.img.data);
//
//         });
//
//       });
//Saves item into database
//   var newItem = new Item();
// newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
// newItem.img.contentType = 'image/png';
// newItem.save();
// console.log('Item Uploaded');
}};
