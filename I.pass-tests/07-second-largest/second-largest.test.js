const { secondLargest } = require("./second-largest");

describe(`Give the secondLargest function`, () => {
  test(`Should return the second biggest number of the [2, 0, 23, 0, 57, 1, 230]`, () => {
    //Arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    //Act
    const output = secondLargest(numbers);

    //Assert
    expect(output).toEqual(57);
  });
});
