const validKeys = ["city", "country"];
const checkKeys = (obj, validKeys) => Object.keys(obj).every((e) => validKeys.includes(e));
const checkForAnomalies = (element) => !checkKeys(element, validKeys);

const formatCities = (cities, transform) => {
  if (Array.isArray(cities) === false) throw new Error("Invalid format");
  if (cities.length === 0) throw new Error("Invalid format");

  const checkObjectKeysAndTypeof = cities.some(checkForAnomalies);
  if (checkObjectKeysAndTypeof) throw new Error("Invalid format");

  return cities.map((results) => transform(results));
};

module.exports = {
  formatCities,
};
