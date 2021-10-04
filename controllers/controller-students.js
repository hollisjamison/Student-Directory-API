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
  const newStudent = models.Students
  try {
    const { name, age, address, gpa, major, image } = req.body

    if (!name || !age || !address || !gpa || !major || !image) {
      return res.send('All fields are required')
    }

    await newStudent.create({ name, age, address, gpa, major, image })

    return res.status(201).redirect('/students')
  } catch (error) {
    return res.status(500).send('HTTP Error 500 unable to handle this request')
  }
}

const updateStudent = async (req, res) => {
  try {
    const { name, age, address, gpa, major, image } = req.body
    const { id } = req.params

    if (!id || !name || !age || !address || !gpa || !major || !image) {
      return res.status(401).send('Please include all fields: id, name, age, address, gpa, major, image')
    }

    const student = await models.Students.findOne({ where: { id } })

    if (!student) return res.send(`Unable to update student #${id}, they do not exist in the database`)

    const updatedStudent = await student.update({ name, age, address, gpa, major, image }, { returning: true })

    res.status(200).json(updatedStudent)

  } catch (error) {
    console.log(error)
    res.status(500).send("HTTP Error 500 unable to handle this request");
  }
}

const deleteStudent = async (req, res) => {
  try {

    const id = req.params.id

    const student = await models.Students.findOne({ where: { id } })

    if (!student) return res.send(`Unable to delete student #${id}, they do not exist in the database`)

    await student.destroy()

    res.status(200).send(`Student ${id} deleted!`)

  } catch (error) {
    res.status(500).send("HTTP Error 500 unable to handle this request");
  }
}

module.exports = {
  errorFunction,
  renderAllStudents,
  getAllStudents,
  addNewStudent,
  updateStudent,
  deleteStudent
}