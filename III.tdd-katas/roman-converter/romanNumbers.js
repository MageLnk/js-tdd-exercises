const convertToOldRoman = (number) => {
  if (typeof number !== "number") throw new Error("Invalid format");

  const numerals = [
    { numeral: "M", decimal: 1000 },
    { numeral: "D", decimal: 500 },
    { numeral: "C", decimal: 100 },
    { numeral: "L", decimal: 50 },
    { numeral: "X", decimal: 10 },
    { numeral: "V", decimal: 5 },
    { numeral: "I", decimal: 1 },
  ];

  return numerals.reduce((romanNumeral, value) => {
    while (number >= value.decimal) {
      romanNumeral += value.numeral;
      number -= value.decimal;
    }
    return romanNumeral;
  }, "");
};

const convertToNewRoman = (number) => {
  if (typeof number !== "number") throw new Error("Invalid format");

  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  return decimal.reduce((romanNumeral, value, index) => {
    while (number >= value) {
      romanNumeral += numerals[index];
      number -= value;
    }
    return romanNumeral;
  }, "");
};

module.exports = {
  convertToOldRoman,
  convertToNewRoman,
};
