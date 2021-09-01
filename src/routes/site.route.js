const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/SiteController');

// [GET] /search
router.get('/search', NewsController.search);

// [GET] /home
router.get('/', NewsController.home);

module.exports = router;
