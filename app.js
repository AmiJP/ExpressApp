const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Welcome to Page')
})

app.get('/hello', function (req, res) {
    res.send('Hello Page')
})

app.listen(3000)