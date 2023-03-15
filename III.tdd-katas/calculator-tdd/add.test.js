const { add } = require("./add");

describe(`Given add function`, () => {
  beforeAll(() => {
    // Cosas generales acá
  });

  test("It should sum two string numbers", () => {
    // Arrange
    const num = "2, 4";
    const expected = 6;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });

  test("`It should return 0 when the two string are empty", () => {
    // Arrange
    const num = "";
    const expected = 0;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should return 88 when recieve '3248 afn  vhrf80 ew0rh8' as string", () => {
    // Arrange
    const num = "3248 afn  vhrf80 ew0rh8";
    const expected = 88;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should return 507 when recieve '32e094c3n8y92fj98f180' as string", () => {
    // Arrange
    const num = "32e094c3n8y92fj98f180";
    const expected = 507;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should return 6 when recieve '1\n2,3' as string", () => {
    // Arrange
    const num = `"1\n2,3"`;
    const expected = 6;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should return 3 when recieve '//;\n1;2' as string", () => {
    // Arrange
    const num = `"//;\n1;2"`;
    const expected = 3;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should throw an error when recieve a negative number showing the negative number", () => {
    // Arrange
    const num = "1,4,-1";

    // Act and Assert
    expect(() => add(num)).toThrow(/^Negatives not allowed: -1$/);
  });

  test("It should throw an error when recieve '1, 4, -1, 5, -7' showing all the negative number", () => {
    // Arrange
    const num = "1, 4, -1, 5, -7";

    // Act and Assert
    expect(() => add(num)).toThrow(/^Negatives not allowed: -1, -7$/);
  });

  test("It should Numbers bigger than 1000 will be ignored, so adding 2 + 1001  = 2", () => {
    // Arrange
    const num = "2, 1001";
    const expected = 2;

    // Act
    const output = add(num);

    // Assert
    expect(output).toEqual(expected);
  });
});
