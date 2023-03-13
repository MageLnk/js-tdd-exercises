const validKeys = ["make", "model", "colour"];
const checkKeys = (obj, validKeys) => Object.keys(obj).every((e) => validKeys.includes(e));
const checkForAnomalies = (element) => !checkKeys(element, validKeys);

const paintShop = (cars, color) => {
  if (Array.isArray(cars) === false) throw new Error("Invalid format");
  if (cars.length === 0) throw new Error("Invalid format");

  const checkObjectKeysAndTypeof = cars.some(checkForAnomalies);
  if (checkObjectKeysAndTypeof) throw new Error("Invalid format");

  return cars.map((car) => {
    if (car.make === "Ford") {
      return { ...car, colour: color };
    } else {
      return car;
    }
  });
};

module.exports = {
  paintShop,
};
