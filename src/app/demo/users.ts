export class Users {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    acceptTandC: boolean;
    age: string;
    state: string;
    country: string;
    address: string;
    tags: string;
    picture: string;
    constructor(firstName, lastName, email, phone, acceptTandC, age, state,
        country, address, tags, picture) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.acceptTandC = acceptTandC;
        this.age = age;
        this.state = state;
        this.country = country;
        this.address = address;
        this.tags = tags;
        this.picture = picture;
        
    }
}
