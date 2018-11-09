const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/errors');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);

// https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Famsterdamduckstore.com%2Fwp-content%2Fuploads%2F2016%2F08%2FMarathon-Rubber-Duck.jpg&f=1