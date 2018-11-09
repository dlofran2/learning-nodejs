const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        pageTitle: 'Node.js Shop', path: '/'
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            products, pageTitle: 'Shop', path: '/products',
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart', path: '/cart',
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders', path: '/orders',
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout', path: '/checkout',
    });
};

exports.getProductDetail = (req, res, next) => {
    res.render('shop/product-detail', {
        pageTitle: 'Product Detail', path: '/product-detail'
    });
};