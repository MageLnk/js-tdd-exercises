const getEven = require("./get-even-numbers");

describe(`Given the getEven function`, () => {
  test(`It should return the numbers what has even 0`, () => {
    // Arrange
    const numbers = [22, 13, 73, 82, 4];
    const expected = [22, 82, 4];

    // Act
    const output = getEven(numbers);

    // Assert
    expect(output).toEqual(expected);
  });
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
