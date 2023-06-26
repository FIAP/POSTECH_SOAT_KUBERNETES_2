const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

module.exports = {
  names,
  getRandomName,
};
