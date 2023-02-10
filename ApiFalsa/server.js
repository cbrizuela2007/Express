const app = require("express")();
const port = 3000;
app.listen(port,()=> console.log(`Listening on portt: ${port}`));

const {faker} =require('@faker-js/faker');
const { Cipher } = require("crypto");

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


app.get("/api/user/new", (req,res)=>{
    res.json(new User())
})

app.get("/api/companies/new",(req,res)=>{
    res.json(new Company())
})

app.get("/api/user/company",
    (req,res)=>{
        res.json({user:new User(), company: new Company()})
    }
)
