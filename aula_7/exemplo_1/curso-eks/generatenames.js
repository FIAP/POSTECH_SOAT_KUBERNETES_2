const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Thiago', 'Rubens', 'Henry', 'Ivy', 'Jack'];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

module.exports = {
  names,
  getRandomName,
};
