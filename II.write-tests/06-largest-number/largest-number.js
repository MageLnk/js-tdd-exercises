const getLargestNumber = (array) => {
  const sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0];
};

module.exports = getLargestNumber;
