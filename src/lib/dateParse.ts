export const parseDateString = (
  dateString: string,
): { date: Date | null; formattedDate: string | null } => {
  const parsedDate = new Date(dateString);
  // Check if parsing was successful and the parsed date is valid
  if (!isNaN(parsedDate.getTime())) {
    // Format the date string as needed (example format: "YYYY-MM-DD HH:mm:ss")
    const formattedDate = parsedDate.toLocaleString(); // Adjust format as per requirements
    return { date: parsedDate, formattedDate };
  }
  return { date: null, formattedDate: null }; // Return null if parsing failed
};
