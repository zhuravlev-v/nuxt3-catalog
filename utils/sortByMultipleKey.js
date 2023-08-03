export default function sortByMultipleKey(keys) {
  return function(a, b) {
      if (keys.length == 0) return 0;
      key = keys[0];
      if (a[key] < b[key]) return -1;
      else if (a[key] > b[key]) return 1;
      else return sortByMultipleKey(keys.slice(1))(a, b);
  }
}