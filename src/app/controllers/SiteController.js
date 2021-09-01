const course = require('../models/course');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    home(req, res, next) {
        course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next)

        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
