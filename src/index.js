// constants
const path = require('path');
const express = require('express');
const app = express();
const ehbs = require('express-handlebars');

// initializations
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', ehbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// routes
app.get('/', (req, res) => {
    res.render('index.hbs')
})

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listener
const server = app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
