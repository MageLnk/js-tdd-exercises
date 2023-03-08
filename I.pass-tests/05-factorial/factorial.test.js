const { factorial } = require("./factorial");

describe("Given the factorial function", () => {
  test("Should give 120 as result when recieve a 5 as number", () => {
    // Arrange
    const in1 = 5;
    const exp1 = 120;

    // Act
    const out1 = factorial(in1);

    // Assert
    expect(out1).toEqual(exp1);
  });

  test("should give 362880 as result when recieve a 9 as number", () => {
    // Arrange
    const in2 = 9;
    const exp2 = 362880;

    // Act
    const out2 = factorial(in2);

    // Assert
    expect(out2).toEqual(exp2);
  });

  test("should give 1 as result when recieve a 1 as number", () => {
    // Arrange
    const in3 = 1;
    const exp3 = 1;

    // Act
    const out3 = factorial(in3);

    // Assert
    expect(out3).toEqual(exp3);
  });

  test("should give 1 as result when recieve a 0 as number", () => {
    // Arrange
    const in4 = 0;
    const exp4 = 1;

    // Act
    const out4 = factorial(in4);

    // Assert
    expect(out4).toEqual(exp4);
  });

  test("Should give 6 as result when recieve a 3 as number", () => {
    // Arrange
    const in5 = 3;
    const exp5 = 6;

    // Act
    const out5 = factorial(in5);

    // Assert
    expect(out5).toEqual(exp5);
  });

  test("Should give -1 as result when recieve an negative number", () => {
    // Arrange
    const in6 = -3;
    const exp6 = -1;

    // Act
    const out6 = factorial(in6);

    // Assert
    expect(out6).toEqual(exp6);
  });
});
