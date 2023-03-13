const { sales } = require("./car-sales");

describe(`Given the sales function`, () => {
  test(`Should return the sum of all prices when share maker. In the next array carsSold
  should return { Ford: 22999, Honda: 8000, "Land Rover": 21000, Toyota: 6500,}`, () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];
    const totals = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500,
    };

    // Act
    const output = sales(carsSold);

    //Assert
    expect(output).toEqual(totals);
  });

  test(`Should throw error when recieve when of the objects is a wrong key}`, () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", color: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];

    // Act and Assert
    expect(() => sales(carsSold)).toThrow(/^Invalid format$/);
  });

  test(`Should throw error when recieve a string in the price key }`, () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: "15000" },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];

    // Act and Assert
    expect(() => sales(carsSold)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an empty array", () => {
    //Arrange
    const carsSold = [];

    // Act & Assert
    expect(() => sales(carsSold)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const carsSold = null;
    // Act & Assert
    expect(() => sales(carsSold)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const carsSold = false;
    // Act and Assert
    expect(() => sales(carsSold)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const carsSold = "test";
    // Act and Assert
    expect(() => sales(carsSold)).toThrow(/^Invalid format$/);
  });
});
