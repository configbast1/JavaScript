export class Cart {

    constructor(customer, products, totalPrice, status) {
        this.customer = customer;
        this.products = products;
        this.totalPrice = totalPrice;
        this.status = status;
    }

    addProduct(product) {
        this.products.push(product);
    }

    showCart() {
        console.log(this.products);
    }
}
