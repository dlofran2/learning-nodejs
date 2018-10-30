const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('On the users route.');
    res.send(`
        <html>
            <head>
                <title>Exercise 2 -- Express.js</title>
            </head>
            <body>
                <h1>Exercise 2 -- Express.js basics</h1>
                <h2>Users</h2>
            </body>
        </html>
    `);
});

app.use('/', (req, res, next) => {
    console.log('On the home route.');
    res.send(`
        <html>
            <head>
                <title>Exercise 2 -- Express.js</title>
            </head>
            <body>
                <h1>Exercise 2 -- Express.js basics</h1>
                <h2>Homepage</h2>
            </body>
        </html>
    `);
});

app.listen(3000);