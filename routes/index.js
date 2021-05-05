var express = require('express');
var router = express.Router();
var StateController=require('../controller/State')
var DistrictController=require('../controller/District')
var ChildController=require('../controller/child')
var userController=require('../controller/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/state',StateController.getstate);
router.post('/state',StateController.createstate)
router.get('/district',DistrictController.getdistrict);
router.post('/district',DistrictController.createdistrict)
router.get('/child',ChildController.getchild);
router.post('/child',ChildController.createchild)
router.post('/register',userController.addUser);
router.get('/login',userController.login);
router.get('/logout',userController.logout);

module.exports = router;
