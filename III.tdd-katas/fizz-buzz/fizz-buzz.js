const fizzbuzz = (num) => {
  if (typeof num !== "number") throw new Error("Invalid format");

  //const arrayBasedOnNum = Array.from(Array(num).keys(), (x) => x + 1); // Versión ES6
  // const arrayBasedOnNum = [...Array(10).keys(), x => x + 1] // Versión usando spread operator
  const arrayBasedOnNum = Array.from({ length: num }, (_, i) => i + 1); // Versión manipulable, sin hace otro map

  const result = arrayBasedOnNum.map((num) => {
    if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
    if (num % 5 === 0) return "Buzz";
    if (num % 3 === 0) return "Fizz";
    return num;
  });

  return result.join(", ");
};

module.exports = fizzbuzz;
