const express = require('express');

const { mapRouteToViews } = require('../utils/utilities');

const router = express.Router();

// 404 error
router.use((req, res, next) => {
    res.status(404).render("404", { pageTitle: "Page Not Found!" });
});

module.exports = router;