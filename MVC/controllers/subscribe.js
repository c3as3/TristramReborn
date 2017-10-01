require('../../routes/index.js');
var recaptcha = require('express-recaptcha');
var https = require('https');
var mongoose = require('mongoose');
require('../models/db');

var subscriptionSchema = mongoose.Schema({
    name: String,
    email: String
});

module.exports.subscribeSubmitted = function(req,res, next)   {
  recaptcha.verify(req, function(error, data){
  if(!error){
    console.log('Recaptcha Verified');
    console.log('Message Attempted');
    req.check('email', 'Invalid Email Address').isEmail();
    req.check('email', 'Email is a required field').notEmpty();
    req.check('name', 'Name is a required field').notEmpty();

    var errors = req.validationErrors();
    if (errors){
      req.session.errors = errors;
      req.session.success = false;
      console.log('errors on form')
    } else{
      req.session.success = true;
      var newSubscription = {
          name: req.body.name,
          email: req.body.email,
        }
    console.log('New Subscription Submitted');
    var subscription = mongoose.model('subscription', subscriptionSchema);
    var sendSubscription = new subscription(newSubscription);
      sendSubscription.save(function(err, result){
        if(err){
          console.log(err);
      res.render('splash');
          console.log('Get Splash Page')
        }else{
          console.log('Subscription saved in MongoDB')
        }

      })
    }
    res.redirect('/');
  }

  else{
console.log('Recaptcha not Verified');
  }

});


};


// module.exports.subscribeSubmitted = function(req,res, next)   {
//     res.render('splash');
//     recaptcha.verify(req, function(error){
//         if(!error){
//     console.log('reCaptcha Verified');
//     console.log('Message Attempted');
//      req.checkBody('name', 'Your Name is a required field.').notEmpty();
//      req.checkBody('email', 'Your Email is a required field.').notEmpty();
//      req.checkBody("email", "Enter a valid email address.").isEmail();
//
//
//      var errors = req.validationErrors();
//
//
//      if (errors) {
//
//     console.log('errors on form')
//      } else{
//
//        var newSubscription = {
//            name: req.body.name,
//            email: req.body.email,
//          }
//      console.log('New Subscription Submitted');
//      var subscription = mongoose.model('subscription', subscriptionSchema);
//      var sendSubscription = new subscription(newSubscription);
//        sendSubscription.save(function(err, result){
//          if(err){
//            console.log(err);
//        res.render('splash');
//            console.log('Get Splash Page')
//          }else{
//            console.log('Subscription saved in MongoDB')
//          }
//
//        })
//
//      }
//
//
// }
// })
// };