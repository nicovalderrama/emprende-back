require('dotenv').config()
const http = require('http')
const fs = require('fs')

function requestController(req,res){
    const url = req.url
    const method = req.method

    console.log({url,method})

    if (method === 'GET' && url === '/') {
        res.setHeader("Content-type", "text/html")
        fs.readFile("./public/index.html", (err,file) => {
            if (err) {
                console.log('HUBO UN ERROR')
            }
            res.write(file)
            res.end()
        })
        return
    }

    if (method === 'GET' && url === '/about') {
        res.setHeader("Content-type", "text/html")
        fs.readFile("./public/about.html", (err,file) => {
            if (err) {
                console.log("HUBO UN ERROR")
            }
            res.write(file)
            res.end()
        })
        return
    }

    res.setHeader("Content-type","text/html; charset=utf-8")
    res.write("<h1>Pagina no encontrada</h1>")
    res.end()

}

//configurar servidor
const server = http.createServer(requestController)

const port = process.env.PORT

server.listen(port, function(){
    console.log(`aplicacion corriendo en el puerto :  ${port}`)
})