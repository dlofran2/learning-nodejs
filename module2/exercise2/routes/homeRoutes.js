const express = require('express');

const { mapRouteToViews } = require('../utils/utilities');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(mapRouteToViews('home.html'));
});

module.exports = router;