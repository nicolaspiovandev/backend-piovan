const express = require('express')

const app = express()


app.get('/', (req, res) => {
   res.send('<h1 style="color:blue;"> Bienvenidos al server express </h1>')
}) 

let visits = 0
app.get('/visits', (req, res) => {
   res.send(`La cantidad de visitas es ${++visits} `)
})

app.get('/fyh', (req, res) => {
   res.send({fyh: new Date().toLocaleString()})
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))
