const Course = require('../models/course');
const {singleMongooseToObject} = require('../../util/mongoose');

class CoursesController {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {
                    course: singleMongooseToObject(course),
                });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create')
    }
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${formData.vID}/sddefault.jpg`;
        console.log(formData);
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CoursesController();
