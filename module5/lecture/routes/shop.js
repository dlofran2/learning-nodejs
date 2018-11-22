const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// / => GET
router.get('/', shopController.getIndex);

// /products => GET
router.get('/products', shopController.getProducts);

// /products/${product.id} => GET
router.get('/products/:productId', shopController.getProduct);

// /cart => GET
router.get('/cart', shopController.getCart);

// /cart => POST
router.post('/cart', shopController.postCart);

// /cart-delete-item => POST
router.post('/cart-delete-item', shopController.postCartDeleteItem);

// /orders => GET
router.get('/orders', shopController.getOrders);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

// /product-detail => GET
router.get('/product-detail', shopController.getProductDetail);

module.exports = router;