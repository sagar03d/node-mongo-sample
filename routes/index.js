var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save-data', UserController.create);
router.get('/index', UserController.index);

module.exports = router;