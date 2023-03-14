const name = require("./get-second-third");

describe(`Given the name function`, () => {
  test("???", () => {
    // Arrange
    const numbers = [90, 5, 11, 8, 6];
    const expected = [6, 8];

    // Act
    const output = name(numbers);

    // Assert
    expect(output).toEqual(expected);
  });
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
