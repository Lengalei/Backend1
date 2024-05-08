const express = require('express')
const app = express()
const port = 2121

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index',{ name: 'LENGALEI', school: 'KCA' })
})

app.listen(port, () => {
    console.log(`Server is on Port: ${port}`)
})