var express = require('express');
var router = express.Router();

const UserController = require('../controllers/User')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('registration', { title: 'Express' });
});

router.post('/', UserController.create);

module.exports = router;