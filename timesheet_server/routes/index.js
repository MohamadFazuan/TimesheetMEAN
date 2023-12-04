var express = require('express');
var router = express.Router();
var model = require('../model/model.js');
const { create, readAll } = require('../controllers/crud.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function (req, res, next) {
  res.send(create(req.body));
});

router.get('/readAll', function (req, res, next) {
  res.send(readAll());
});

module.exports = router;
