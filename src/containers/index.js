class Container {
    constructor() {
        this.productos = []
    }

    save(producto) {
        let id = this.productos.length + 1;
        producto.id = id;
        this.productos.push(producto)
    }

    getAll() {
        return this.productos;
    }

    getById(id) {
        // retorna producto con id
        let productFound = this.productos.find(obj => obj.id === +id)
        return productFound
    }

    deleteById(id) {
        this.productos= this.productos.filter(obj => obj.id !== +id)
    }

    updateById(id, newProduct) {
        this.productos = this.productos.map(obj => obj.id === id ? {...newProduct, id} : obj)
    }
}


module.exports = Container;