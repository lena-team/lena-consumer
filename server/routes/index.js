const router = require('express').Router();
const controller = require('../controllers');

// search routes
router.get('/search', controller.search.get);

// user routes
router.get('/user', controller.user.get);
router.post('/user', controller.user.post);

// zipcode routes
router.get('/zipcode', controller.zipcode.get);
router.post('/zipcode', controller.zipcode.post);

// city routes
router.get('/city', controller.city.get);
router.post('/city', controller.city.post);

// review routes
router.get('/review', controller.review.get);
router.post('/review', controller.review.post);

// cart routes
router.get('/cart', controller.cart.get);
router.post('/cart', controller.cart.post);

// payment routes
router.get('/payment', controller.payment.get);
router.post('/payment', controller.payment.post);

module.exports = router;
