import count_days from './cound_days_stack.js';

let startTime = performance.now();
o_1.innerText = count_days(i_1.innerText);
let endTime = performance.now();
t_1.innerText = endTime - startTime;

startTime = performance.now();
o_2.innerText = count_days(i_2.innerText);
endTime = performance.now();
t_2.innerText = endTime - startTime;
