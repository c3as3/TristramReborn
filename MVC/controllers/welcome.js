var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.homepage = function(req, res){
  res.render('index');
  console.log('GET Homepage')
};
module.exports.about = function(req, res){
  res.render('about');
  console.log('About Page Loaded...')
};
module.exports.classes = function(req, res){
  res.render('classes');
  console.log('Classes Page Loaded')
};
module.exports.guides = function(req, res){
  res.render('guides');
  console.log('Guides Page Loaded')
};
module.exports.items = function(req, res){
  res.render('items');
  console.log('Items Page Loaded')
};
module.exports.leaderboards = function(req, res){
  res.render('leaderboards');
  console.log('Leaderboards Page Loaded')
};
module.exports.news = function(req, res){
  res.render('news');
  console.log('News Page Loaded')
};
module.exports.twitch = function(req, res){
  res.render('twitch');
  console.log('Twitch Page Loaded')
};
