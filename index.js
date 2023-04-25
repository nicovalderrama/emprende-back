require('dotenv').config()
const http = require('http')

function requestController(){
    //logica de la funcion
    console.log('hola mundo')
}

//configurar servidor
const server = http.createServer(requestController)

const port = process.env.PORT
server.listen(port, function(){
    console.log(`aplicacion corriendo en el puerto :  ${port}`)
})