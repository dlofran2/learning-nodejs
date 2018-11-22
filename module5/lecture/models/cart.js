const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // Analyize the current cart for existing projects
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = existingProductIndex !== -1 ? cart.products[existingProductIndex] : null;

            // Either add new product or increase quantity based on if the product already exists
            if (existingProduct) {
                cart.products = [
                    ...cart.products.slice(0, existingProductIndex),
                    { ...existingProduct, quantity: existingProduct.quantity + 1 },
                    ...cart.products.slice(existingProductIndex + 1)
                ];
            } else {
                cart.products = [...cart.products, { id, quantity: 1 }];
            }
            cart.totalPrice += +productPrice;

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            // If the cart doesn't exist, go ahead an return because there is nothing to delete
            if (err) return;

            let cart = JSON.parse(fileContent);
            const existingProduct = cart.products.find(product => product.id === id);

            if (existingProduct) {
                cart.products = cart.products.filter(product => product.id !== id);
                cart.totalPrice -= +productPrice * existingProduct.quantity;
            }

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }

    static removeOneProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            // If the cart doesn't exist, go ahead an return because there is nothing to delete
            if (err) return;

            const cart = JSON.parse(fileContent);
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = existingProductIndex !== -1 ? cart.products[existingProductIndex] : null;

            if (existingProduct) {
                // If there is only 1 product with that id in our cart, we want to remove it completely from the cart
                // If there is more than one, we want to decrease the amount by one.
                if (existingProduct.quantity === 1) {
                    cart.products.filter(product => product.id !== id);
                } else {
                    cart.products = [
                        ...cart.products.slice(0, existingProductIndex),
                        { ...existingProduct, quantity: existingProduct.quantity - 1 },
                        ...cart.products.slice(existingProductIndex + 1),
                    ];
                }
                cart.totalPrice -= +productPrice;
            }

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }

    static getProducts(cb) {
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if (err) {
                cb(null);
            } else {
                cb(cart);
            }
        });
    }
};