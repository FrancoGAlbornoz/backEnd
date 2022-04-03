
const express = require('express')

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

const app = express()

app.get('/inicio', (req, res) => {
    res.send(`<h1>Bienvenido</h1>`)
    
})

app.get('/productos', (req, res) => {
    res.send(miArray)


})

function RandArray(array){
    var rand = Math.random()*array.length | 0;
    var rValue = array[rand];
    return rValue;
}

var rValue = RandArray(miArray);
console.log(rValue)

app.get('/productoRamdom', (req, res) => {
    res.send(rValue)

    
})
 
const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))