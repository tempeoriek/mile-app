module.exports = function (app) {
  let Home = require('../api/routes/Home');
  app.use('/', Home);
  
  let Package = require('../api/routes/Package');
  app.use('/package', Package);
}
