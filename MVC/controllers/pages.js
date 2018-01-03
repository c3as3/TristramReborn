var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.about = function(req, res, next){
  res.render('about');
  console.log('About Page Loaded...')
};
module.exports.classes = function(req, res, next){
  res.render('classes');
  console.log('Classes Page Loaded')
};
module.exports.guides = function(req, res, next){
  res.render('guides');
  console.log('Guides Page Loaded')
};
module.exports.items = function(req, res, next){
  res.render('item');
  console.log('Items Page Loaded')
};
module.exports.leaderboards = function(req, res, next){
  res.render('leaderboards');
  console.log('Leaderboards Page Loaded')
};
module.exports.splash = function(req, res, next){
  res.render('splash', {title: 'Subscribe Now',success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
  console.log('Splash Page Loaded')
};
module.exports.itemUpload = function(req, res, err){
  res.render('itemUpload');
  console.log('Items Upload Page Loaded')
};
module.exports.breakpoints = function(req, res, err){
  res.render('breakpoints');
  console.log('Items Upload Page Loaded')
};
module.exports.mapguides = function(req, res, err){
  res.render('mapguides');
  console.log('Items Upload Page Loaded')
};
module.exports.leveling = function(req, res, err){
  res.render('leveling');
  console.log('Items Upload Page Loaded')
};
module.exports.magicfind = function(req, res, err){
  res.render('magicfind');
  console.log('Items Upload Page Loaded')
};
module.exports.classbuilds = function(req, res, err){
  res.render('classbuilds');
  console.log('Items Upload Page Loaded')
};
module.exports.speedrunning = function(req, res, err){
  res.render('speedrunning');
  console.log('Items Upload Page Loaded')
};
