const { findTheWord } = require("./find-needle");

describe("Given the findTheWord function", () => {
  test(`Find the word needle in ["house", "train", "slide", "needle", "book"] and 
  response his iterator 3`, () => {
    //Arrange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    // Act
    const output = findTheWord(words, "needle");

    //Assert
    expect(output).toEqual(expected);
  });

  test("Find the plant", () => {
    //Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    // Act
    const output = findTheWord(words, "plant");

    //Assert
    expect(output).toEqual(expected);
  });
});
