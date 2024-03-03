const express = require('express')
const app = express()
const port = 3000;


app.use('/', (req, res) => {
    console.log('ok')
    res.send('ok')
})

app.listen(port, () => {
    console.log('Ket noi thanh cong ~')
})