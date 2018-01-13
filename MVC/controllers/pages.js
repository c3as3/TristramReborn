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
module.exports.leaderboards = function(req, res, next){
  res.render('leaderboards');
  console.log('Leaderboards Page Loaded')
};
module.exports.splash = function(req, res, next){
  res.render('splash', {title: 'Subscribe Now',success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
  console.log('Splash Page Loaded')
};
module.exports.breakpoints = function(req, res, next){
  res.render('breakpoints');
  console.log('Guides - Breakpoints Loaded')
};
module.exports.mapguides = function(req, res, next){
  res.render('mapguides');
  console.log('Guides - Maps Loaded')
};
module.exports.leveling = function(req, res, next){
  res.render('leveling');
  console.log('Guides - Leveling Loaded')

};
module.exports.magicfind = function(req, res, next){
  res.render('magicfind');
  console.log('Guides - Magic Find  Loaded')
};
module.exports.classbuilds = function(req, res, next){
  res.render('classbuilds');
  console.log('Guides - Class Builds Loaded')
};
module.exports.speedrunning = function(req, res, next){
  res.render('speedrunning');
  console.log('Guides - Speedrunning Loaded')
};
