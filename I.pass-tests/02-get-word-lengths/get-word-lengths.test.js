const { getWordLengths } = require("./get-word-lengths");

describe("Given the getWordLength function", () => {
  it(`Should count the length of ['sun', 'potato', 'roundabout', 'pizza'] and response [3, 6, 10, 5]`, () => {
    //Arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
    //Act
    const output = getWordLengths(words);
    //Assert
    expect(output).toEqual(expected);
  });
});
