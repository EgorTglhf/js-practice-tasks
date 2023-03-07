import linear_enumeration from './linear_enumeration.js';
import hash_use from './hash_use.js';
import binary_search from './binary_search.js';
import two_pointers from './two_pointers.js';

let result = linear_enumeration(...getInputInnerText(l_i_1));
l_o_1.innerText = '{' + result.join(', ') + '}';

result = hash_use(...getInputInnerText(s_i_1));
s_o_1.innerText = '{' + result.join(', ') + '}';

result = binary_search(...getInputInnerText(b_i_1));
b_o_1.innerText = '{' + result.join(', ') + '}';

result = two_pointers(...getInputInnerText(t_i_1));
t_o_1.innerText = '{' + result.join(', ') + '}';

function getInputInnerText(el) {
  const text = el.innerText;
  const [numberString, k] = text.split(';');
  const numberArray = numberString
    .slice(1, numberString.length - 1)
    .split(',')
    .map((d) => parseInt(d));
  return [numberArray, parseInt(k)];
}
