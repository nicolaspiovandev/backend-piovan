const { Router } = require('express');
const Container = require('../containers');
const routerProduct = Router()

const container = new Container()

routerProduct.get('/', (req, res, next) => {
    const productos = container.getAll()
    res.json({ productos })
})

routerProduct.get('/:id', (req, res, next) => {
    const { id } = req.params
    const product = container.getById(id)
    if (!product) {
        return res.json({
            msg: "El producto no existe",
            error: true
        })
    }
    res.json({ data: product })
})

routerProduct.post('/', (req, res, next) => {
    const { name, price, thumbnail } = req.body
    if (!name || !price || !thumbnail) {
        return res.json({
            msg: "Faltan datos para guardar el producto",
            error: true
        })
    }

    const product = { name, price, thumbnail }
    container.save(product)

    res.json({ data: product })
})

routerProduct.put('/:id', (req, res, next) => {
    const { id } = req.params
    const updatedProduct = req.body
    container.updateById(+id, updatedProduct)
    res.json({ data: updatedProduct })

})

routerProduct.delete('/:id', (req, res, next) => {
    const { id } = req.params
    const product = container.getById(id)
    if (!product) {
        return res.json({
            msg: "El producto no existe",
            error: true
        })
    }
    container.deleteById(id)
    res.json({
        msg: "El producto fue borrado",
    })
})



module.exports = routerProduct;