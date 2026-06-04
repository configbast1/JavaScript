export class Product {

    constructor(name, price, quantity, rating, category) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.rating = rating;
        this.category = category;
    }

    showInfo() {
        console.log("Товар: " + this.name);
    }

    getPrice() {
        return this.price;
    }
}
