const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

// mongoose.connect('mongodb+srv://gmendes230:gmendes0@omnistack-gzatp.mongodb.net/semana09?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost/semana9', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// request.query = Acessar query params (para filtros)
// request.params = Acessar route params (para edição, delete)
// request.body = Acessar o corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333)
