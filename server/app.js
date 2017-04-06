const express = require('express')
const route = require('./route')
const port = 3000
const app = express()

app.use(route)

app.listen(port, () => {
  console.log('Start server on port ' + port)
})
