const express = require('express');

const router = express.Router();

const { users } = require('./add-user');

router.get('/', (req, res, next) => {
    res.render('user', {
        pageTitle: 'User', path: '/', users
    });
});

module.exports = router;