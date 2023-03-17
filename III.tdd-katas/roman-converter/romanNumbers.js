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
  let romanNumerals = "";
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i <= decimal.length; i++) {
    while (number % decimal[i] < number) {
      romanNumerals += numerals[i];
      number -= decimal[i];
    }
  }
  return romanNumerals;
};

module.exports = {
  convertToOldRoman,
  convertToNewRoman,
};

/*

function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

*/
