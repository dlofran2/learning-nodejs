const express = require('express');

const { mapRouteToViews } = require('../utils/utilities');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(mapRouteToViews('users.html'));
});

module.exports = router;