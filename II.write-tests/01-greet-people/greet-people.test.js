const greetPeople = require("./greet-people");

describe(`Given the greetPeople function`, () => {
  test("Should print list of names prefixed with Hello", () => {
    // Arrange
    const people = ["John", "Jane", "Joe"];
    const expectedGreeting = ["Hello John", "Hello Jane", "Hello Joe"];

    // Act
    const result = greetPeople(people);

    // Assert
    expect(result).toEqual(expectedGreeting);
  });
});
