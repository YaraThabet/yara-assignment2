function allProduct() {
    var products = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        products[_i] = arguments[_i];
    }
    return products.reduce(function (all, product) { return all + product.price; }, 0);
}
var product1 = { name: "item1", price: 20 };
var product2 = { name: "item2", price: 50 };
console.log(allProduct(product1, product2));
