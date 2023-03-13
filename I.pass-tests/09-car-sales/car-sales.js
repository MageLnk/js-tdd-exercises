const calculatedThePriceOfCars = (validArray) => {
  return validArray.reduce((totals, car) => {
    const make = car.make;
    const price = car.price;
    if (totals[make]) {
      totals[make] += price;
    } else {
      totals[make] = price;
    }

    return totals;
  }, {});
};

const validKeys = ["make", "model", "colour", "price"];
const checkKeys = (obj, validKeys) => Object.keys(obj).every((e) => validKeys.includes(e));
const checkForAnomalies = (element) => !checkKeys(element, validKeys) || typeof element.price !== "number";

const sales = (carsSold) => {
  if (Array.isArray(carsSold) === false) throw new Error("Invalid format");
  if (carsSold.length === 0) throw new Error("Invalid format");

  const checkObjectKeysAndTypeof = carsSold.some(checkForAnomalies);
  if (checkObjectKeysAndTypeof) throw new Error("Invalid format");

  return calculatedThePriceOfCars(carsSold);
};

module.exports = {
  sales,
};
