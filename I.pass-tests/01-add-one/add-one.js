const addOne = (numbers) => {
  if (Array.isArray(numbers) === false) throw new Error("Invalid format");

  const SearchForAnomalies = numbers.map((result) => typeof result === "number");
  if (SearchForAnomalies.includes(false)) throw new Error("Invalid format");

  return numbers.map((result) => result + 1);
};

module.exports = {
  addOne,
};

//const checkValidNumber = numbers.filter((result) => isNaN(result));
//if (checkValidNumber.lenght === 0) {
//  return [];
//}
