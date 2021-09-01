const express = require('express');
const router = express.Router();

const MyCoursesController = require('../app/controllers/MyCoursesController');

router.post('/handleform', MyCoursesController.handleForm)
router.get('/:id/edit', MyCoursesController.edit);
router.put('/:id', MyCoursesController.update);
router.delete('/:id', MyCoursesController.delete);
router.delete('/:id/destroy', MyCoursesController.destroy)
router.get('/trash', MyCoursesController.trash);
router.patch('/:id/restore', MyCoursesController.restore);
router.get('/', MyCoursesController.show);

module.exports = router;