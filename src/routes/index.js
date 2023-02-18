const express = require('express');
const router = express.Router();

const filtersController = require('../controllers/filters');
const moviesController = require('../controllers/movies');


router.get('/filters', filtersController.get);
router.get('/movies', moviesController.get);


module.exports = router;