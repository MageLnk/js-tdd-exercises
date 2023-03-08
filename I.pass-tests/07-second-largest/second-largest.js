const secondLargest = (numbers) => {
  const sortArray = numbers.sort((a, b) => a - b);

  return sortArray[sortArray.length - 2];
};

module.exports = { secondLargest };
