const getAllMonthCombosBetweenDates = ({ getQuaterFromDate }) => {
  return function getAllMonthYearCombos(startDate, endDate) {
    const combos = [];
    let currentDate = new Date(startDate);
    let quarter = getQuaterFromDate(currentDate); // Calculate quarter
    while (currentDate <= endDate) {
      const endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ); // Get end date of current month
      const daysInMonth = endOfMonth.getDate(); // Get number of days in current month
      let daysCovered = daysInMonth; // Initialize daysCovered to the full month
      if (currentDate.getMonth() === endDate.getMonth()) {
        // If current month is the same as the end month, adjust daysCovered
        daysCovered = endDate.getDate() - currentDate.getDate() + 1;
      } else if (currentDate.getMonth() === startDate.getMonth()) {
        // If current month is the same as the start month, adjust daysCovered
        daysCovered -= startDate.getDate() - 1;
      }
      const combo = {
        month: currentDate.toLocaleString("default", { month: "short" }), // Get short month name
        year: currentDate.getFullYear(), // Get full year
        daysCovered: daysCovered, // Number of days covered in current month
        quarter: quarter, // Quarter of the year
      };
      combos.push(combo);

      // Move to the first day of next month
      currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      );
      quarter = getQuaterFromDate(currentDate); // Calculate quarter for next month
    }
    return combos;
  };
};

module.exports = getAllMonthCombosBetweenDates;
