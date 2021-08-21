const path = require('path')
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const app = express();
const port = 8080;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

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

// route init
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
