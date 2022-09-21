const fs = require('fs');

class Contenedor {
    constructor(file) { //molde
        this.file = file;
    }

    async save(product) {
        let content = await fs.promises.readFile(this.file)
        let contObj = JSON.parse(content) //transformacion de string a obj
        let newId;
        newId = contObj.length > 0 ? contObj.length + 1 : 1; //if else resumido
        /* if (contObj.length > 0) {
            newId = contObj.length + 1;
        }else{
            newId =1
        } */
        product.id = newId;
        contObj.push(product) //agrego el objeto al array
        await fs.promises.writeFile(this.file, JSON.stringify(contObj)) //transformacion de obj a string

    }

    async getAll() {
        let content = await fs.promises.readFile(this.file)
        let contObj = JSON.parse(content) //transformacion de string a obj
        return contObj
    }
    async getById(id) {
        let contObj = await this.getAll()
        let result = contObj.find(obj => obj.id == id)
        return result
    }
    async deleteById(id) {
        let contObj = await this.getAll()
        let newObj = contObj.find(obj => obj.id !== id)
        await fs.promises.writeFile(this.file, JSON.stringify(newObj))
    }
    async deleteAll() {
        await fs.promises.writeFile(this.file, "[]")
    }
}

let products = new Contenedor('products.txt')

let product1 = {
    "name": "Vans shoes",
    "price": 70,
    "thumbnail": "https://www.digitalsport.com.ar/files/products/60b685306b1db-486140-500x500.jpg"
}

let product2 = {
    "name": "Nike shoes",
    "price": 85,
    "thumbnail": "https://www.digitalsport.com.ar/files/products/625dfa1392383-547438-500x500.jpg"
}

let product3 = {
    "name": "Adidas shoes",
    "price": 65,
    "thumbnail": "https://www.digitalsport.com.ar/files/products/612041815a11a-539116-500x500.jpg"
}

const useContainer = async () => {
    await products.save(product1)
    await products.save(product2)
    await products.save(product3)
}


useContainer()


/* products.getById()

products.deleteById()

products.deleteAll() */
module.exports = Contenedor