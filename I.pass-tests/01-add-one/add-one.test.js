const { addOne } = require("./add-one.js");

// My Version
describe("Given the addOne function", () => {
  it("Will add one to [31, 57, 12, 5] returning [32, 58, 13, 6] and keeping the original array", () => {
    //Arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //Act
    const output = addOne(myArray);

    //Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it("Will add one to [] returning []", () => {
    //Arrange
    const myArray = [];
    const expected = [];

    //Act
    const output = addOne(myArray);

    //Assert
    expect(output).toEqual(expected);
  });
  it("Will add one to entire negative array [-31, -57, -12, -5] to [-30, -56, -13, -4]", () => {
    // Arrange
    const myArray = [-31, -57, -12, -5];
    const unchanged = [-31, -57, -12, -5];
    const expected = [-30, -56, -11, -4];
    // Act
    const output = addOne(myArray);
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const myArray = null;
    // Act & Assert
    expect(() => addOne(myArray)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const myArray = false;
    // Act and Assert
    expect(() => addOne(myArray)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const myArray = "test";
    // Act and Assert
    expect(() => addOne(myArray)).toThrow(/^Invalid format$/);
  });

  it("Will return same array if recieved an array with Strings", () => {
    // Arrange
    const myArray = [55, "-57", 53, 14];
    const expected = [55, "-57", 53, 14];
    // Act and Assert
    expect(() => addOne(myArray)).toThrow(/^Invalid format$/);
  });
});
