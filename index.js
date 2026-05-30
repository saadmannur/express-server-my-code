const express = require('express');

const cors = require('cors')

const app = express();
const port = process.env.PORT || 8000;

//Middleware
app.use(cors())
app.use(express.json())


app.get('/' , (req, res) => {
    res.send("hello from express server");
});

const users = [
    {id: 1, name: "Khalid", email: "khalid@gmail.com"},
    {id: 2, name: "Karina", email: "karina@gmail.com"},
    {id: 3, name: "Daniels", email: "daniels@gmail.com"},
    {id: 4, name: "Joo Joo", email: "joojoo@gmail.com"},
]

app.get('/users', (req, res) => {
    res.send(users);
});

// post method
app.post('/users', (req, res) => {
    console.log("data in the request:", req.body);

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)

    res.send({ success: true, data: newUser , message: "user added successfully" })
})

app.get('/about', (req, res) => {
    res.send("hello from the about")
});


const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Smartphone", price: 30000 },
    { id: 3, name: "Headphones", price: 2500 },
    { id: 4, name: "Backpack", price: 1800 },
    { id: 5, name: "Smart Watch", price: 5000 }
];

app.get('/products', (req, res) => {
    res.send(products)
})
//post method
app.post('/products', (req, res) => {
    console.log("data in the request:", req.body)

    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct)

    res.send({success: true, data: newProduct ,message: "product added successfully"})
})



app.listen(port , () => {
    console.log(`server is running on port ${port}`);
})