const express = require('express')
const app = express()
const Contenedor = require('./index')


app.get('/productos', (req, res) => {
   let contenedor = new Contenedor()
   res.send(`Estos son todos los productos: `)
})

app.get('/productoRandom', (req, res) => {
   res.send(`El producto elegido al azar es:  `)
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

