const express = require('express');
const app = express();

const { names, getRandomName } = require('./generatenames');

app.get('/', (req, res) => {
  res.send({ name: getRandomName() });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;