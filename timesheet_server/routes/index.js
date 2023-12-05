var express = require('express');
var router = express.Router();
var model = require('../model/model.js');
const { create, readAll, readItem, updateItem, deleteItem } = require('../controllers/crud.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', create);
router.get('/readItem', readItem);
router.get('/readAll', readAll);
router.post('/updateItem/:id', updateItem);
router.delete('/deleteItem/:id', deleteItem);

module.exports = router;
