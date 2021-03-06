const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    console.log('in file code');
    fs.readFile(p, (err, fileContent) => {
        console.log('length', fileContent.length);
        /* Check if the file is either 
         * 1. Empty (fileContent.length === 0)
         * 2. {} (fileContent.length === 2) ** This isn't full proof yet.
         */
        if (err || fileContent.length === 0 || fileContent.length === 2) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            console.log('in callback');
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}