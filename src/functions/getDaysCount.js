const getDaysCountBetweenDates = () => {
  return function getDaysCount(startDate, endDate) {
    // Convert both dates to UTC to ensure consistent calculation
    const start = Date.UTC(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );
    const end = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );

    // Calculate the difference in milliseconds
    const diff = Math.abs(end - start);

    // Convert the difference from milliseconds to days
    return (Math.floor(diff / (1000 * 60 * 60 * 24))+1);
  };
};

module.exports = getDaysCountBetweenDates;
