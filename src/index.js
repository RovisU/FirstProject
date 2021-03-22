const express = require('express');
const app = express();
const path = require('path');

// setting port
app.set('port', 3000);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// midlewares

// roures
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(process.env.PORT || 3000);