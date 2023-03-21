const passwordVerifierFunction = require("./passwordVerifierFunction");

describe("PasswordVerifier function", () => {
  test("It should exist", () => {
    // Arrange, act and assert
    expect(typeof passwordVerifierFunction).toBe("function");
  });

  it("It should throw an error if password length is smaller than 8", () => {
    // Arrange
    const password = "1234567";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).toThrow("Password should be larger than 8 chars");
  });

  it("It should not throw an error if password length is greater than 8", () => {
    // Arrange
    const password = "1234567Hl";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).not.toThrow();
  });

  it("It should password not be null", () => {
    // Arrange
    const password = null;

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).toThrow("Password cannot be null");
  });

  it("It should throw an error if password do not have at least one uppercase", () => {
    // Arrange
    const password = "12345hola";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).toThrow("The password should contain at least one uppercase");
  });

  it("It should no throw an error if password do not have at least one uppercase", () => {
    // Arrange
    const password = "12345Hola";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).not.toThrow(
      "The password should be contain at least one uppercase"
    );
  });

  it("It should throw an error if password do not have at least one lowercase", () => {
    // Arrange
    const password = "12345HOLA";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).toThrow("The password should contain at least one lowercase");
  });

  it("It should no throw an error if password do not have at least one lowercase", () => {
    // Arrange
    const password = "12345HOLa";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).not.toThrow(
      "The password should be contain at least one lowercase"
    );
  });

  it("It should throw an error if password be contain at least one number", () => {
    // Arrange
    const password = "Holaholahola";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).toThrow("The password should contain at least one number");
  });

  it("It should not throw an error if password be contain at least one number", () => {
    // Arrange
    const password = "Holaho12";

    // Act and Assert
    expect(() => passwordVerifierFunction(password)).not.toThrow("The password should be contain at least one number");
  });

  it("It should return 'The password is Ok' if at least 3 conditions are met", () => {
    // Arrange
    const password = "Asdf123asdf";
    const result = passwordVerifierFunction(password);

    // Act and Assert
    expect(result).toBe("The password is Ok");
  });
});
