export default function hash_use(arr, k) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[k - arr[i]]) {
      return [k - arr[i], arr[i]];
    } else {
      hash[arr[i]] = true;
    }
  }
}
