const http = require('http')

function requestController(){
    //logica de la funcion

}

//configurar servidor
const server = http.createServer(requestController)

server.listen(3000)