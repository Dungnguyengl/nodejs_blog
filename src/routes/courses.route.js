const express = require('express');
const router = express.Router();

const CoursesController = require('../app/controllers/CoursesController');

// [GET] /courses/create
router.get('/create', CoursesController.create)
// [POST] /courses/store
router.post('/store', CoursesController.store)
// [GET] /courses/:slug
router.get('/:slug', CoursesController.show);

module.exports = router;