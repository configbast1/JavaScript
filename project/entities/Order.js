export class Order {

    constructor(number, customer, cart, date, status) {
        this.number = number;
        this.customer = customer;
        this.cart = cart;
        this.date = date;
        this.status = status;
    }

    showOrder() {
        console.log("Замовлення №" + this.number);
    }
}
