var mongoose = require('mongoose');

var itemsSchema = mongoose.Schema({
    item: String,
    type: String,
    class: String,
    img:
     { data: Buffer, contentType: String }
});
module.exports = mongoose.model('items', itemsSchema);
