const { findSecondAndThirdSmallestNumbers } = require("./get-second-third");

describe(`Given the findSecondAndThirdSmallestNumbers function`, () => {
  test(`It should return the second and thrid smallest number`, () => {
    // Arrange
    const numbers = [90, 5, 11, 8, 6];
    const expected = [6, 8];

    // Act
    const output = findSecondAndThirdSmallestNumbers(numbers);

    // Assert
    expect(output).toEqual(expected);
  });
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
