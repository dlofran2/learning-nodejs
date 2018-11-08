const express = require('express');

const adminData = require('./admin');

const router = express.Router();

// / => GET
router.get('/', (req, res, next) => {
    const products = adminData.products;
    // [GOTCHA] -- Added hasProducts and activeShop for handlebars because it doesn't support logical operators
    res.render('shop', {
        products, pageTitle: 'Shop', path: '/',
        hasProducts: products.length > 0, activeShop: true, productCSS: true,
    });
});

module.exports = router;