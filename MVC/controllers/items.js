require('../../routes/index.js');
var mongoose = require('mongoose');
require('../models/db');
const moment = require('moment');
var items = require('../models/items')

/*
///////////////////////////////////////
///////////////////////////////////////
//////////////pulling data//////////////
///////////////////////////////////////
///////////////////////////////////////
*/


module.exports.items = function(req, res, next){
  items.find(function (error, docs){
       res.render('items', {
         items: docs
       })});
  console.log('Items Page Loaded')
};
