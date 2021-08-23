const newRouter = require('./news.route');
const siteRouter = require('./site.route');

function router(app) {
    app.use('/news', newRouter);

    app.use('/', siteRouter);
}

module.exports = router;
