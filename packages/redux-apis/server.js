const express = require('express')
var cors = require('cors')
const booksRouter = require('./src/routes/books.router')
const app = express()
const port = 3000

var corsOptions = {
  origin: '*',
  // some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, react-redux-toolkit api')
})

app.use('/api/books/v1', booksRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})