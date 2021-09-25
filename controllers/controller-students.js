const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

const getStudents = (req, res) => {
  res.send('TEST This will be a list of all students');
};

module.exports = {
  errorFunction,
  getStudents
}