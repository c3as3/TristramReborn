require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
var app = require('express');
var multer = require('multer')

var itemsSchema = mongoose.Schema({
    item: String,
    type: String,
    class: String,
    img:
     { data: Buffer, contentType: String }
});

var item = mongoose.model('Items', itemsSchema);

(multer({ dest: './uploads/',
   rename: function (fieldname, filename) {
     return filename;
   },
  }));

//Controller
module.exports.itemsSubmitted = function(req,res){


//Saves item into database
//   var newItem = new Item();
// newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
// newItem.img.contentType = 'image/png';
// newItem.save();
// console.log('Item Uploaded');
}
