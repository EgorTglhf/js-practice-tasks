export default function two_pointers(arr, k) {
  let lp = 0;
  let rp = arr.length - 1;

  while (lp <= rp) {
    if (arr[lp] + arr[rp] === k) return [arr[lp], arr[rp]];

    if (arr[lp] + arr[rp] > k) {
      rp--;
    } else {
      lp++;
    }
  }
}
