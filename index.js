

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5500;


app.use(bodyParser.json());

let products = [];


app.get('/products', (req, res) => {
    res.json(products);
});


app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    if (!product) {
        res.status(404).send('Produto não encontrado');
        return;
    }
    res.json(product);
});


app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).send('Produto criado com sucesso');
});

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const newProduct = req.body;
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
        res.status(404).send('Produto não encontrado');
        return;
    }
    products[index] = newProduct;
    res.send('Produto atualizado com sucesso');
});


app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    products = products.filter(p => p.id !== id);
    res.send('Produto excluído com sucesso');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
