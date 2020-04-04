// myForEach(arr, func)

var nums = [45, 654, 34, 564];

function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
