const { formatCities } = require("./cities");

describe(`Given formatCities function`, () => {
  test(`It Should build one array of strings ["Paris is the capital of France", 
"Madrid is the capital of Spain", "Rome is the capital of Italy"] when recieve cities and countrys as
a keys in an array of objects`, () => {
    //Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" },
    ];

    //Act
    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    };

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy",
    ];
    const result = formatCities(capitals, transform);

    //Assert
    expect(result).toEqual(expected);
  });

  test(`It Should throw error when recieve when of the objects is a wrong key`, () => {
    //Arrange
    const capitals = [
      { city: "Paris", countri: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" },
    ];

    // Act and Assert
    expect(() => formatCities(capitals)).toThrow(/^Invalid format$/);
  });

  test(`It Should throw error when a key's value recieve a null`, () => {
    //Arrange
    const capitals = [
      { city: null, countri: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" },
    ];

    // Act and Assert
    expect(() => formatCities(capitals)).toThrow(/^Invalid format$/);
  });

  it("It Will throw error when received an empty array", () => {
    //Arrange
    const capitals = [];

    // Act & Assert
    expect(() => formatCities(capitals)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const capitals = null;
    // Act & Assert
    expect(() => formatCities(capitals)).toThrow(/^Invalid format$/);
  });
});
