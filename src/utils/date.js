export const stringToDate = dateString => {
  const parts = dateString.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
};

export const prettifyDate = dateString => {
  const parts = dateString.split("-");
  const month = monthReducer(parts[1]);
  return `${month} ${parts[2]}, ${parts[0]}`;
};

const monthReducer = month => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Jan";
  }
};
