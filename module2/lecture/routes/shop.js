const express = require('express');

const { mapRouteToViews } = require('../utils/utilities');

const router = express.Router();

// / => GET
router.get('/', (req, res, next) => {
    res.sendFile(mapRouteToViews('shop.html'));
});

module.exports = router;