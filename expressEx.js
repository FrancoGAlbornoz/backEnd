
const express = require('express')


const app = express()

app.get('/inicio', (req, res) => {
    res.send(`<h1>Bienvenido</h1>`)
    
})
function mostrar(){
    $("#btn1").click(() => { 
        $.getJSON(URLJSON, function (respuesta, estado) {
            if(estado === "success"){
                const misDatos = respuesta;
                for (const dato of misDatos) {
                  $("body").append(`<div>
                                          <p>Producto : ${dato.title}</p>
                                          <p> Precio : ${dato.price}</p>
                                      </div>`)
                  console.log(dato)
              }  
              }
        });
    });
}

app.get('/productos', (req, res) => {
    const URLJSON = "/miArchivo.json"
    mostrar(res.send(`<h1>Bienvenido</h1>
    <p>Productos</p>
    <button id="btn1">Mostrar</button>`
    
    ))
    
    
    
})


app.get('/productoRamdom', (req, res) => {
    res.send()
})
 
const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))