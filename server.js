const express = require('express')
const { join } = require('path')
const fs = require('fs')

const app = express()
// const PORT = process.env.PORT || 3000

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, './public/notes.html'))
})

app.get('/api/notes', function(req, res) {
  res.sendFile(join(__dirname, "/db/db.json"))
})



app.post('')

// require('./routes/apiRoutes')(app)
// require('./routes/htmlRoutes')(app)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(3000)