const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

module.exports = {
  errorFunction
}