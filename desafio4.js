const express = require('express')
const {Router} = require('express')

const routerProds = Router();

const app = express()

miArray= [{
    title: "Escuadra",
    price: 123.45,
    id: 1
  },
  {
    title: "Calculadora",
    price: 234.56,
    id: 2
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    id: 3
  },
  {
    nombre: "Auriculares",
    price: 345.67,
    id: 4
  }
  ]

routerProds.get('/api/productos', ({ query }, res) => {

    res.send(`<h1>Productos</h1>`)
    res.json(miArray)

})

app.get('/api/productos/:id', ({ params }, res) => {
    console.log(params)
})

app.post('/api/productos', ({ body }, res) => {
    console.log(body)
})

app.put('/api/productos/:id', ({ body, params }, res) => {
    console.log(body, params)
})

app.delete('/api/productos/:id', ({ params }, res) => {
    console.log(params)
})
 
