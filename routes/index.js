var express = require('express');
var router = express.Router();
var recaptcha = require('express-recaptcha');
var ctrlDiabloPages = require('../MVC/controllers/pages.js');
var ctrlMessage = require('../MVC/controllers/messages.js');
var ctrlSubscribe = require('../MVC/controllers/subscribe.js');
var ctrlArticle = require('../MVC/controllers/articles.js')
var ctrlItemsUpload = require('../MVC/controllers/itemsUpload.js')
var ctrlNewsFeed = require('../MVC/controllers/news.js')
var ctrlHomepage = require('../MVC/controllers/homepage.js');
//var ctrltwitchUsers = require('../MVC/controllers/twitchusers.js')
var ctrlTwitchpage = require('../MVC/controllers/twitch.js')
var ctrlItems = require('../MVC/controllers/items.js');
//ReCaptcha MiddleWare
recaptcha.init('6LdQHTEUAAAAAEck5dN_0xuNI97DTZw9YKhPYrx2', '6LdQHTEUAAAAAJBSZRxCsHavkmIcFkn8PuXadE0c');
verify = function (req, res, next){
  self.verify(req,function(error){
    req.recaptcha = {error:error};
    next();
  });
};


//Comment out .homepage controller to start splash and vice-versa to start at homepage(remove homepage from /)
//Regular Pages
router.get('/', ctrlHomepage.homepage);
// router.get('/', ctrlDiabloPages.splash);
router.get('/guides', ctrlDiabloPages.guides);
  router.get('/guides/breakpoints', ctrlDiabloPages.breakpoints);
  router.get('/guides/mapguides', ctrlDiabloPages.mapguides);
  router.get('/guides/leveling', ctrlDiabloPages.leveling);
  router.get('/guides/magicfind', ctrlDiabloPages.magicfind);
  router.get('/guides/classbuilds', ctrlDiabloPages.classbuilds);
  router.get('/guides/speedrunning', ctrlDiabloPages.speedrunning);
router.get('/leaderboards', ctrlDiabloPages.leaderboards);
router.get('/about', ctrlDiabloPages.about);
router.get('/classes', ctrlDiabloPages.classes);


//Complex pages with separate controllers
router.get('/messages', ctrlMessage.messages);
router.get('/twitch', ctrlTwitchpage.twitch);
router.post('/submit', ctrlSubscribe.subscribeSubmitted);
router.post('/messages', ctrlMessage.messageSubmitted);
router.get('/news', ctrlNewsFeed.news);
router.post('/articleInjection', ctrlArticle.articleSubmitted);
router.get('/articleInjection', ctrlArticle.articlesForm);
router.get('/items', ctrlItems.items);
router.get('/itemUpload', ctrlItemsUpload.itemForm)
router.post('/itemUpload', ctrlItemsUpload.itemsSubmitted);
//router.post('/twitchUsers', ctrltwitchUsers.twitchUsersSubmitted);
//router.get('/twitchUsers', ctrltwitchUsers.twitchUsers);
module.exports = router;
