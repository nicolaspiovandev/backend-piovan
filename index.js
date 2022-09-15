const http = require('http')

const getMessage = () => {
    const hour = new Date().getHours()

    if (hour >= 6 && hour <= 12) {
        return 'Buenos dias!'
    } else if (hour >= 13 && hour <= 19) {
        return 'Buenas tardes!'
    } else if (hour >= 20 && hour <= 5) {
        return 'Buenas noches!'
    }
}
const server = http.createServer((req, res) =>{
    res.end(getMessage())
})

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})