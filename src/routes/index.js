const newRouter = require('./news.route');
const coursesRouter = require('./courses.route');
const siteRouter = require('./site.route');
const myCoursesRouter = require('./myCourses.route');

function router(app) {
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/mycourses', myCoursesRouter);
    app.use('/', siteRouter);
}

module.exports = router;
