export class Customer {

    constructor(name, surname, phone, email, address) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    showCustomer() {
        console.log(this.name + " " + this.surname);
    }
}
