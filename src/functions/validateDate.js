const validatesDate = () => {
    return function validateDate(dateString) {
      // Regular expression to match the date format 'YYYY-MM-DD'
      const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

      // Check if the dateString matches the format
      if (!dateFormatRegex.test(dateString)) {
        return false;
      }

      // Check if the parsed date is valid
      const [year, month, day] = dateString.split("-").map(Number);
      const date = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    }
}

module.exports = validatesDate;