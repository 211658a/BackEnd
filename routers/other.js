var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
// router.get('/products', function(req, res, next) {
//     res.render('products');
// });
router.get('/blog', function(req, res, next) {
    res.render('blog');
});
router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/cart2', function(req, res, next) {
    res.render('cart2', { title: 'Express' });
});
module.exports = router;