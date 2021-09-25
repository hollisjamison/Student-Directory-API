const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

const getAllStudents = async (req, res) => {
  const students = await models.Students.findAll()

  return res.send(students)
};

module.exports = {
  errorFunction,
  getAllStudents
}