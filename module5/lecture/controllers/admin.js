const Product = require('../models/product');

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list', {
            products, pageTitle: 'Admin Products', path: '/admin/products'
        });
    })
};

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title, imageUrl, price, description } = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/admin/products');
};

exports.getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product', path: '/admin/edit-product',
    });
};

exports.postEditProduct = (req, res, next) => {
    res.redirect('/admin/add-product');
};
