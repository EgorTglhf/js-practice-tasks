export default function count_days_stack(daysTemperatureArray) {
  const stack = [];

  const countDaysArray = Array(daysTemperatureArray.length).fill(-1);

  for (let i = daysTemperatureArray.length - 1; i >= 0; i--) {
    while (
      stack.length !== 0 &&
      stack[stack.length - 1].value <= daysTemperatureArray[i]
    ) {
      stack.pop();
    }

    if (stack.length !== 0) {
      countDaysArray[i] = stack[stack.length - 1].index - i;
    }

    stack.push({ index: i, value: daysTemperatureArray[i] });
  }

  return countDaysArray;
}
