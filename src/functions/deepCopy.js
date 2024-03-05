const deepCopyObjects = () => {
  return function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj; // Return primitives and null as is
    }

    // Create an empty object or array based on the type of obj
    const copy = Array.isArray(obj) ? [] : {};

    // Recursively copy each property of obj
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }

    return copy;
  };
};

module.exports = deepCopyObjects;
