const { getRandomName } = require('./generatenames');

const names = ['Thiago', 'Rubens', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

describe('getRandomName', () => {  

  it('should return a different random name each time', () => {
    const results = new Set();

    // Execute the function multiple times and store the results in a Set
    for (let i = 0; i < 100; i++) {
      results.add(getRandomName());
    }

    // Expect the size of the Set to be equal to the number of unique names
    expect(results.size).toEqual(names.length);
  });
});
