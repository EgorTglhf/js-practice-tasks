export default function binary_search(arr, k) {
  let start, middle, end;
  for (let i = 0; i < arr.length; i++) {
    let number = k - arr[i];
    start = i + 1;
    end = arr.length - 1;

    while (start <= end) {
      middle = start + Math.round((end - start) / 2);
      if (arr[middle] === number) return [arr[i], arr[middle]];
      if (arr[middle] > number) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }
}
