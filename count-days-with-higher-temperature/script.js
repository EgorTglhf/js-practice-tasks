import count_days_stack from './count_days_stack.js';
import count_days_two_loops from './count_days_two_loops.js';

let result = count_days_two_loops(getArrayInnerText(l_i_1));
l_o_1.innerText = '{' + result.join(', ') + '}';

result = count_days_stack(getArrayInnerText(s_i_1));
s_o_1.innerText = '{' + result.join(', ') + '}';

result = count_days_two_loops(getArrayInnerText(l_i_2));
l_o_2.innerText = '{' + result.join(', ') + '}';

result = count_days_stack(getArrayInnerText(s_i_2));
s_o_2.innerText = '{' + result.join(', ') + '}';

function getArrayInnerText(el) {
  const text = el.innerText;
  return text
    .slice(1, text.length - 1)
    .split(',')
    .map((d) => parseInt(d));
}
