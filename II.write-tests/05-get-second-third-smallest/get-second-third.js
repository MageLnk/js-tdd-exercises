const findSecondAndThirdSmallestNumbers = (numbers) => {
  const newArray = numbers.slice();
  newArray.sort((x, y) => x - y);
  return [newArray[1], newArray[2]];
};

module.exports = {
  findSecondAndThirdSmallestNumbers,
};
