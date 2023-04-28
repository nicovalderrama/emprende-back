require('dotenv').config()
const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')

//middlewares
// app.use(express.static(path.join(__dirname + 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('index')
})
app.get('/about',(req,res) => {
    res.render('about')
})

const port = process.env.PORT

app.listen(port,() => {
    console.log(`escuchando en el puerto ${port}`)
})