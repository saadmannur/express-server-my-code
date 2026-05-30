const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

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

app.get('/about', (req, res) => {
    res.send("hello from the about")
});

app.get('/products', (req, res) => {
    res.send("products are jumping up and up")
})



app.listen(port , () => {
    console.log(`server is running on port ${port}`);
})