const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            pageTitle: 'Shop', path: '/', products
        });
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            products, pageTitle: 'Products', path: '/products',
        });
    });
};

exports.getProduct = (req, res, next) => {
    const { productId } = req.params;
    Product.findById(productId, product => {
        res.render('shop/product-detail', {
            pageTitle: product.title, path: '/products', product
        })
    });
};

exports.getCart = (req, res, next) => {
    Cart.getProducts(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            products.forEach(product => {
                const cartProduct = cart.products.find(prod => prod.id === product.id);
                if (cartProduct) {
                    cartProducts.push({ product, quantity: cartProduct.quantity });
                }
            });
            console.log(cartProducts);
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                cartProducts
            });
        });
    });
};

exports.postCart = (req, res, next) => {
    const { productId } = req.body;
    Product.findById(productId, product => {
        Cart.addProduct(productId, product.price);
    });
    res.status(204).send();
};

exports.postCartDeleteItem = (req, res, next) => {
    const { productId } = req.body;
    console.log('productId', req.body);
    Product.findById(productId, product => {
        console.log(product);
        Cart.deleteProduct(productId, product.price);
        res.redirect('/cart');
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