const express = require('express')
const Contenedor = require('./index')
const app = express()

let contenedor = new Contenedor("products.txt")

const randomProduct = async () => {
   let totalProducts = await contenedor.getAll() //traigo todos los productos 
   let randomParse = JSON.parse(totalProducts) //los paso de string a objeto
   let randomP = await randomParse[Math.floor(Math.random() * randomParse.length)]; //funcion para traer obj al azar
   return randomP // push
}

app.get('/productos', async (req, res) => {
   let products = await contenedor.getAll()
   res.send(`Estos son todos los productos: ${products}`)
})

app.get('/productoRandom', async (req, res) => {
   let productRandom = await randomProduct() //traigo el array 
   let finalProduct = JSON.stringify(productRandom) //lo vuelvo a pasar d obj a string
   res.send(`El producto elegido al azar es: ${finalProduct} `)
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

