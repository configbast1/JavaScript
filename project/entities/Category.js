export class Category {

    constructor(name, description, productCount, isActive) {
        this.name = name;
        this.description = description;
        this.productCount = productCount;
        this.isActive = isActive;
    }

    showCategory() {
        console.log("Категорія: " + this.name);
    }
}
