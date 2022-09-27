const fs = require('fs');

class Contenedor {
    constructor(file) { //molde
        this.file = file;
    }


    async getAll() {
        let content = await fs.promises.readFile(this.file)
        /* let contObj = JSON.parse(content) */ //transformacion de string a obj
        return content
    }

}

let products = new Contenedor('products.txt')


const useContainer = async () => {
    await products.getAll()
    return products
}


useContainer()

module.exports = Contenedor