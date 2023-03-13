const calcTheSum = (validArray) => {
  const totals = {};
  for (let i = 0; i < validArray.length; i++) {
    const car = validArray[i];
    const make = car.make;
    const price = car.price;

    if (totals[make]) {
      totals[make] += price;
    } else {
      totals[make] = price;
    }
  }
  return totals;
};

const checkKeys = (obj, validKeys) => Object.keys(obj).every((e) => validKeys.includes(e));

const sales = (carsSold) => {
  if (Array.isArray(carsSold) === false) throw new Error("Invalid format");
  if (carsSold.length === 0) throw new Error("Invalid format");

  const validKeys = ["make", "model", "colour", "price"];
  carsSold.forEach((element) => {
    if (!checkKeys(element, validKeys)) throw new Error("Invalid format");
    if (typeof element.price !== "number") throw new Error("Invalid format");
  });

  return calcTheSum(carsSold);
};

module.exports = {
  sales,
};
