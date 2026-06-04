class Product {
    constructor(imageUrl, name, rating, price, discountedPrice) {
        this.imageUrl = imageUrl;
        this.name = name;
        this.rating = rating;
        this.price = price;
        this.discountedPrice = discountedPrice;
    }

    createCard() {

        let card = document.createElement("div");
        card.className = "card";

        let stars = "";

        for (let i = 0; i < this.rating; i++) {
            stars += "⭐";
        }

        card.innerHTML =
            '<img src="' + this.imageUrl + '">' +
            '<div class="card-content">' +
            '<h3>' + this.name + '</h3>' +
            '<p>' + stars + '</p>' +
            '<p class="old-price">' + this.price + ' грн</p>' +
            '<p class="new-price">' + this.discountedPrice + ' грн</p>' +
            '<button>Додати в кошик</button>' +
            '</div>';

        return card;
    }
}

class ProductGenerator {

    generate(count) {

        let products = document.getElementById("products");

        let images = [
            "images/phone.webp",
            "images/laptop.webp",
            "images/headphones.webp",
            "images/keyboard.webp",
            "images/mouse.webp"
        ];

        for (let i = 1; i <= count; i++) {

            let price = Math.floor(Math.random() * 3000) + 500;

            let image =
                images[Math.floor(Math.random() * images.length)];

            let product = new Product(
                image,
                "Товар " + i,
                Math.floor(Math.random() * 5) + 1,
                price,
                Math.floor(price * 0.8)
            );

            products.appendChild(product.createCard());
        }
    }
}

let generator = new ProductGenerator();

generator.generate(25);
