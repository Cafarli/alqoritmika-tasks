const express = require('express');
const app = express();

const products = require('./products.json');

app.get('/products', function (req, res) {
    res.send(JSON.stringify(products))
})
app.get('/product/:id', function (req, res) {
    // res.json(products.products.find((product)=> product.id.toString() === req.params.id.toString()))
    res.json(products.products.filter((product)=> product.id.toString() === req.params.id.toString()))
})

app.listen(3000, function () {
    console.log('Example app listening on port 30001!');
  });