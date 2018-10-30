const path = require('path');

const express = require('express');

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(userRoutes);

app.listen(3000);