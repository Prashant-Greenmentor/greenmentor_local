const quaterFromDate = () => {
  return function getQuaterFromDate(dateString) {
    const date = new Date(dateString);

    const month = date.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index
    const year = date.getFullYear();

    // Calculate the quarter based on the month
    if (month >= 3 && month <= 5) {
      return 1; // First quarter
    } else if (month >= 6 && month <= 8) {
      return 2; // Second quarter
    } else if (month >= 9 && month <= 11) {
      return 3; // Third quarter
    } else {
      return 4; // Fourth quarter
    }
  };
};

module.exports = quaterFromDate;
