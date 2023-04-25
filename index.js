require('dotenv').config()
const http = require('http')

function requestController(){
    //logica de la funcion

}

//configurar servidor
const server = http.createServer(requestController)

port = process.env.PORT
server.listen(port)