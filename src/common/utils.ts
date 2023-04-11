import moment from "moment";

const vwToPx = (width: number) => {
  const oneVwInPx = window.innerWidth / 100;
  return oneVwInPx * width;
};

const vhToPx = (height: number) => {
  const oneVhInPx = window.innerHeight / 100;
  return oneVhInPx * height;
};

const getTodayPreviousWeekDays = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = moment();
  const result = [];

  for (let i = 0; i < 7; i++) {
    result.push(daysOfWeek[today.day()]);
    today.subtract(1, "days");
  }

  return result.reverse();
};

export { vwToPx, vhToPx, getTodayPreviousWeekDays };
