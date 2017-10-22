const router = require('express').Router();
const controller = require('../controllers');

// search routes
router.get('/search', controller.search.get);

// user routes
router.get('/user', controller.user.get);
router.post('/user', controller.user.post);

// zipcodes routes
router.get('/zipcode', controller.zipcode.get);
router.post('/zipcode', controller.zipcode.post);

module.exports = router;
