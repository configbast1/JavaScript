import { Product } from "./entities/Product.js";
import { Category } from "./entities/Category.js";
import { Manufacturer } from "./entities/Manufacturer.js";
import { Cart } from "./entities/Cart.js";
import { Customer } from "./entities/Customer.js";
import { Order } from "./entities/Order.js";

let category =
    new Category(
        "Ноутбуки",
        "Комп'ютерна техніка",
        100,
        true
    );

let manufacturer =
    new Manufacturer(
        "ASUS",
        "Taiwan",
        1989,
        "asus.com",
        "+380111111111"
    );

let product =
    new Product(
        "ASUS TUF",
        35000,
        5,
        4.8,
        category
    );

let customer =
    new Customer(
        "Іван",
        "Петренко",
        "+380999999999",
        "ivan@gmail.com",
        "Київ"
    );

let cart =
    new Cart(
        customer,
        [],
        0,
        "active"
    );

cart.addProduct(product);

let order =
    new Order(
        1,
        customer,
        cart,
        "2026-06-04",
        "new"
    );

category.showCategory();
manufacturer.showManufacturer();
product.showInfo();
customer.showCustomer();
cart.showCart();
order.showOrder();
