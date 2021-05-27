const express = require('express')
const app = express()
const { PORT: port = 3000 } = process.env
const { getMessage } = require('./src/functions')

app.get('/', (req, res) => {
  res.send(getMessage())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
