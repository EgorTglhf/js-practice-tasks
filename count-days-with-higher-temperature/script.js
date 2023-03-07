import count_days_stack from './count_days_stack.js';
import count_days_two_loops from './count_days_two_loops.js';

let daysTemperatureArray = l_i_1.innerText
  .slice(1, l_i_1.innerText.length - 1)
  .split(',')
  .map((d) => parseInt(d));
let result = count_days_two_loops(daysTemperatureArray);
l_o_1.innerText = '{' + result.join(', ') + '}';

daysTemperatureArray = s_i_1.innerText
  .slice(1, s_i_1.innerText.length - 1)
  .split(',')
  .map((d) => parseInt(d));
result = count_days_stack(daysTemperatureArray);
s_o_1.innerText = '{' + result.join(', ') + '}';

daysTemperatureArray = l_i_2.innerText
  .slice(1, l_o_2.innerText.length - 1)
  .split(',')
  .map((d) => parseInt(d));
result = count_days_two_loops(daysTemperatureArray);
l_o_2.innerText = '{' + result.join(', ') + '}';

daysTemperatureArray = s_i_2.innerText
  .slice(1, s_o_2.innerText.length - 1)
  .split(',')
  .map((d) => parseInt(d));
result = count_days_stack(daysTemperatureArray);
s_o_2.innerText = '{' + result.join(', ') + '}';
