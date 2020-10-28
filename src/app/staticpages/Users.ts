


export class Users
{
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    constructor(id, FirstName, LastName, email, country)
{
        this.id = id;
        this.firstname = FirstName;
        this.lastname = LastName;
        this.email = email;
        this.country = country;
}
}
