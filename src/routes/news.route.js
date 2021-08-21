const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/NewsController');

// [GET] /news/:slug
router.use('/:slug', NewsController.show);

// [GET] /news
router.use('/', NewsController.index);

module.exports = router