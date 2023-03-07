const addOne = (numbers) => {
  if (Array.isArray(numbers) === false) {
    throw new Error("Invalid format");
  }
  const SearchForString = numbers.map((result) => typeof result === "string");
  if (SearchForString.includes(true)) throw new Error("Invalid format");

  //const checkValidNumber = numbers.filter((result) => isNaN(result));
  //if (checkValidNumber.lenght === 0) {
  //  return [];
  //}

  return numbers.map((result) => result + 1);
};

module.exports = {
  addOne,
};
