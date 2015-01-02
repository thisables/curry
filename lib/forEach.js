module.exports = function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(i, arr[i]);
  }
};
