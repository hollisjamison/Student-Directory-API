const express = require('express')
const bodyParser = require('body-parser')
const { errorFunction, getAllStudents, renderAllStudents, addNewStudent, updateStudent, deleteStudent } = require('./controllers/controller-students');
const methodOverride = require('method-override');

const PORT = 1800

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/students', renderAllStudents)

app.get('/api/students', getAllStudents)

app.post('/api/students', bodyParser.json(), addNewStudent)

app.put('/api/students/:id', bodyParser.json(), updateStudent)

app.delete('/api/students/:id', deleteStudent)

app.get('*', errorFunction)

app.listen(process.env.PORT || PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})