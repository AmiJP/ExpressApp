const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Welcome to Page')
})

app.get('/greeting', function (req, res) {
    res.send('Welcome to the greeting Page')
})

app.listen(3000)