const express = require('express');

const { mapRouteToViews } = require('../utils/utilities');

const router = express.Router();

// 404 error
router.use((req, res, next) => {
    res.status(404).sendFile(mapRouteToViews('error404.html'));
});

module.exports = router;