const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

const renderAllStudents = async (req, res) => {
  const students = await models.Students.findAll()

  return res.render('index', { students })
};

const getAllStudents = async (req, res) => {
  const students = await models.Students.findAll()

  return res.send(students)
};

const addNewStudent = async (req, res) => {
  try {
    const { name, age, address, gpa, major, image } = req.body

    if (!name || !age || !address || !gpa || !major || !image) {
      return res.send('All fields are required')
    }

    const newStudent = await models.Students.create({ name, age, address, gpa, major, image })

    return res.status(201).send(newStudent)
  } catch (error) {
    return res.status(500).send('HTTP Error 500 unable to handle this request')
  }
}

module.exports = {
  errorFunction,
  renderAllStudents,
  getAllStudents,
  addNewStudent
}