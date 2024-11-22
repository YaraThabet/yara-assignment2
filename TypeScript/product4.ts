interface Product {
   name: string;
   price: number;
}

function allproduct(...products: Product[]): number {  
   return products.reduce((all, product) => all + product.price, 0);
}

let Product1: Product = { name: "item1", price: 20 };
let Product2: Product = { name: "item2", price: 50 };

console.log(allproduct(Product1, Product2)); 