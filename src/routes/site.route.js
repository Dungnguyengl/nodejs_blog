const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/SiteController');

// [GET] /search
router.use('/search', NewsController.search);

// [GET] /home
router.use('/', NewsController.home);

module.exports = router