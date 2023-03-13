const { paintShop } = require("./paint-cars");

describe(`Given paintShop function`, () => {
  test("Should repaints only Ford cars", () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];
    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];
    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    //Act
    const output = paintShop(cars, "Pink");

    //Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  test("Should repaints only Ford cars", () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Ford", model: "Mustang", colour: "Blue" },
    ];
    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Ford", model: "Mustang", colour: "Blue" },
    ];
    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Green" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Ford", model: "Mustang", colour: "Green" },
    ];

    //Act
    const output = paintShop(cars, "Green");

    //Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  test(`Should throw error when recieve when of the objects is a wrong key`, () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", color: "Silver" },
      { make: "Ford", model: "Mustang", colour: "Blue" },
    ];

    // Act and Assert
    expect(() => paintShop(cars)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const cars = null;
    // Act & Assert
    expect(() => paintShop(cars)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const cars = false;
    // Act and Assert
    expect(() => paintShop(cars)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const cars = "test";
    // Act and Assert
    expect(() => paintShop(cars)).toThrow(/^Invalid format$/);
  });
});
