export default function count_days_two_loops(daysTemperatureArray) {
  const countDayArray = Array(daysTemperatureArray.length).fill(-1);

  for (let i = 0; i < daysTemperatureArray.length; i++) {
    for (let j = i + 1; j < daysTemperatureArray.length; j++) {
      if (daysTemperatureArray[i] < daysTemperatureArray[j]) {
        countDayArray[i] = j - i;
        break;
      }
    }
  }

  return countDayArray;
}
