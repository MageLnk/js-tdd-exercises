const { removeMiddle } = require("./remove-middle");

describe(`Give the removeMiddle function`, () => {
  test(`Should remove the word of the middle in ["mouse", "giraffe", "queen", "window", "bottle"] 
  we get ["queen"] and the original array change to ["mouse", "giraffe", "window", "bottle"]`, () => {
    //Arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];

    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    //Act
    const output = removeMiddle(words);

    //Assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });
});
