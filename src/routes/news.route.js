const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/NewsController');

// [GET] /news/:slug
router.get('/:slug', NewsController.show);

// [GET] /news
router.get('/', NewsController.index);

module.exports = router;
