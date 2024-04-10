const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5500;


app.use(bodyParser.json());

let products = []; 


app.get('/products', (req, res) => {
    res.json(products);
});


// Rota para criar um novo produto Invoke-WebRequest -Uri "http://localhost:5500/products" -Method Post -ContentType "application/json" -Body '{"id": "1", "name": "Celular", "price": 20}'
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product); 
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
