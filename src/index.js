const path = require('path')
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')))

console.log(path.join(__dirname, 'public'))

// HTTP logger
app.use(morgan('dev'));

// template eng

app.engine('.hbs', exphbs({
    layoutsDir: __dirname + '\\resources\\view\\layouts',
    extname: '.hbs'
}));
app.set('views', path.join(__dirname, 'resources\\view'));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/new', (req, res) => {
    res.render('new');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
