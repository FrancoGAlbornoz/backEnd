const express = require('express')

const producto = require("./desafio4.js")



const app = express()

app.use(express.json())


app.use('/api/productos', producto)




const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))