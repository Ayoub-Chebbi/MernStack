const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const server = app.listen(port, ()=>{
    console.log("server running")
})

const Users = [
    {Passwsord : faker.internet.password()},
    {Email : faker.internet.email()},
    {PhoneNumber : faker.phone.number()},
    {LastName : faker.person.lastName()},
    {FirstName:faker.person.firstName()},
    {Id:faker.database.mongodbObjectId()}
]

const Company = [
    {Id : faker.database.mongodbObjectId()},
    {name :faker.company.name()},
    {Address : {
        street : faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    }},
]
    
app.get("/api/users/new", (req, res) => {
    res.json( Users );
});

app.get("/api/companies/new", (req, res) => {
        res.json( Company );
    });

app.get("/api/company", (req, res) => {
        res.json( Users );
        res.json( Company );
});