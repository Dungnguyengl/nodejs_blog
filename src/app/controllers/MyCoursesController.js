const Course = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /mycourses
    show(req, res, next) {
        let coursesQuery = Course.find();

        if (req.query.hasOwnProperty('_sort')) {
            coursesQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        coursesQuery
            .then(courses => {
                res.render('myCourses/show', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    // [GET] /mycourses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('myCourses/edit', course))
            .catch(next);
    }
    // [PUT] /mycourses/:id
    update(req, res, next) {
        const formData = req.body;
        const _id = req.params.id;
        formData.img = `https://img.youtube.com/vi/${formData.vID}/sddefault.jpg`;
        Course.updateOne({ _id }, formData)
            .then(() => res.redirect('/mycourses'))
            .catch(next);
    }
    // [DELETE] /mycourses/:id
    delete(req, res, next) {
        const _id = req.params.id;
        Course.deleteById({ _id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [GET] /mycourses/trash
    trash(req, res, next) {
        Course.findDeleted()
            .then(courses => {
                res.render('myCourses/trash', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    // [PATCH] /mycourses/:id/restore
    restore(req, res, next) {
        const _id = req.params.id;
        Course.restore({ _id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /mycourses/:id/destroy
    destroy(req, res, next) {
        const _id = req.params.id;
        Course.deleteOne({ _id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [POST] /mycourses/handleform
    handleForm(req, res, next) {
        const _id = req.body.courseIds;
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: _id } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Course.restore({ _id: { $in: _id } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'destroy':
                Course.deleteOne({ _id: { $in: _id } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' })
        }
    }
}

module.exports = new CoursesController();
