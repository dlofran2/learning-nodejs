const Product = require('../models/product');

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list', {
            products, pageTitle: 'Admin Products', path: '/admin/products'
        });
    })
};

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', path: '/admin/add-product',
        edit: false,
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title, imageUrl, price, description } = req.body;
    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/admin/products');
};

exports.getEditProduct = (req, res, next) => {
    const { productId } = req.params;
    const { edit } = req.query;

    Product.findById(productId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', path: '/admin/edit-product',
            edit, product,
        });
    });
};

exports.postEditProduct = (req, res, next) => {
    const { productId, title, imageUrl, price, description } = req.body;
    const product = new Product(productId, title, imageUrl, description, price);
    product.save();
    res.redirect('/admin/products');
};

exports.postDeleteProduct = (req, res, next) => {
    const { productId } = req.body;
    Product.deleteById(productId);
    res.redirect('/admin/products');
};