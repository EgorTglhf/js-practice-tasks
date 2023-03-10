import decode_linear from './decode_linear.js';
import decode_recursive from './decode_recursive.js';

let startTime = performance.now();
l_o_1.innerText = decode_linear(l_i_1.innerText);
let endTime = performance.now();
l_t_1.innerText = endTime - startTime;

startTime = performance.now();
r_o_1.innerText = decode_recursive(r_i_1.innerText);
endTime = performance.now();
r_t_1.innerText = endTime - startTime;

startTime = performance.now();
l_o_2.innerText = decode_linear(l_i_2.innerText);
endTime = performance.now();
l_t_2.innerText = endTime - startTime;

startTime = performance.now();
r_o_2.innerText = decode_recursive(r_i_2.innerText);
endTime = performance.now();
r_t_2.innerText = endTime - startTime;

startTime = performance.now();
l_o_3.innerText = decode_linear(l_i_3.innerText);
endTime = performance.now();
l_t_3.innerText = endTime - startTime;

startTime = performance.now();
r_o_3.innerText = decode_recursive(r_i_3.innerText);
endTime = performance.now();
r_t_3.innerText = endTime - startTime;
