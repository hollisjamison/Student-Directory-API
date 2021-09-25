const express = require('express')
const bodyParser = require('body-parser')
const { errorFunction, getAllStudents, getMain } = require('./controllers/controller-students')

const PORT = 1800
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', getMain)

app.get('/api/students', getAllStudents)

app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})