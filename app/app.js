class products {
    constructor(products) {
        this.products = [
            {
                id: 1001,
                name:'Iphone',
                company:'apple',
                price: 800,
                avatar:'http://www.91-img.com/pictures/apple-iphone-6s-64gb-mobile-phone-large-1.jpg'
                
            }, {
                id: 1002,
                name:'Galaxy S7',
                company:'Samsung',
                price: 700,
                avatar:'http://www.91-img.com/pictures/samsung-galaxy-s5-mini-mobile-phone-large-1.jpg'
            }, {
                id: 1003,
                name:'Mate 9',
                company:'Huawei',
                price: 600,
                avatar:'http://www.gadgetsnow.com/photo/54186115/Huawei-Mate-S-128GB.jpg'
            }];
    }
    get() {
        return this.products;
    }
}

module.exports = products;

