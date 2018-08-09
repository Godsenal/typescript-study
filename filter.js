// simple filter in Javascript
export function filter(array, callback) {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    let isPass = callback(array[i], i);
    if (isPass) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}