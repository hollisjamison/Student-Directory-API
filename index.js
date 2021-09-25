const express = require('express')
const bodyParser = require('body-parser')
const { errorFunction, getStudents } = require('./controllers/controller-students')

const PORT = 1800
const app = express()

app.use(express.static('public'))

app.get('/', getStudents)

app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})