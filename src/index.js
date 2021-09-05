const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 8080;

const route = require('./routes');
const db = require('./config/db');

const sortMiddleware = require('./app/middleware/sortMiddleware');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(methodOverride('_method'));

app.use(sortMiddleware);

console.log(path.join(__dirname, 'public'));

// HTTP logger
app.use(morgan('dev'));

// template eng

app.engine(
    '.hbs',
    exphbs({
        layoutsDir: path.join(__dirname , 'resources', 'view', 'layouts'),
        extname: '.hbs',
        helpers:{
            sum: (a, b) => a + b,
            setIndex: a => a + 1,
            sortable: (column, sort) => {
                const sortType = column === sort.column ? sort.type : 'default';
                const icons = {
                    default: "oi oi-elevator",
                    asc: 'oi oi-caret-bottom',
                    desc: 'oi oi-caret-top',
                }
                const types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc',
                }

                const icon = icons[sortType];
                const type = types[sortType];

                return `
                <a href="?_sort&column=${column}&type=${type}">
                    <span class="${icon}"></span>
                </a>`
            },
        }
    }),
);

app.set('views', path.join(__dirname, 'resources', 'view'));
app.set('view engine', 'hbs');

// route init
route(app);

// Connect to DB
db.connect();

app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
});
