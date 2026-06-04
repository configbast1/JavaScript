export class Manufacturer {

    constructor(name, country, year, website, phone) {
        this.name = name;
        this.country = country;
        this.year = year;
        this.website = website;
        this.phone = phone;
    }

    showManufacturer() {
        console.log("Виробник: " + this.name);
    }
}
