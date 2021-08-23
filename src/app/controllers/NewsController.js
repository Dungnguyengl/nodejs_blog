class NewsController {
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.send('NEW DETAL!!!');
    }
}

module.exports = new NewsController();
