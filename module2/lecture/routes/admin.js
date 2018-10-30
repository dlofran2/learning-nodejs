const express = require('express');

const { mapRouteToViews } = require('../utils/utilities');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(mapRouteToViews('add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;
