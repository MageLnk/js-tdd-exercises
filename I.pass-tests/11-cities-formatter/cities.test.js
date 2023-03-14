const { formatCities } = require("./cities");

describe(`Given formatCities function`, () => {
  test(`Should build one array of strings ["Paris is the capital of France", 
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
});
