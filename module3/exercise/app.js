const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const userRoutes = require('./routes/user');
const addUserRoutes = require('./routes/add-user');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(addUserRoutes.routes);

app.listen(3000);