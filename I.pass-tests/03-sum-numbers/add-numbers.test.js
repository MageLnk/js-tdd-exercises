const { addNumbers } = require("./add-numbers");

describe("Given the addNumbers function", () => {
  it(`Should sum all the number inside of the length of [9, 23, 10, 3, 8] and response 53`, () => {
    //Arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    //Act
    const output = addNumbers(numbers);
    //Assert
    expect(output).toEqual(expected);
  });
});
