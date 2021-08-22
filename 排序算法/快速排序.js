function quickSort(arr) {
  quick(arr, 0, arr.length - 1)
}
function quick(arr, left, right) {
  // 需要排序的长度>1
  if (left < right) {
    let pivot = arr[left], // left,pivot
      i = left,
      j = right;
    while (i < j) {
      // 优先j左移
      while (arr[j] >= pivot && i < j) {
        j--;
      }
      while (arr[i] <= pivot && i < j) {
        i++;
      }
      if (i < j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
    // 循环结束，j=i
    arr[left] = arr[i];
    arr[i] = pivot;
    quick(arr, left, i - 1);
    quick(arr, i + 1, right)
  }
}

let testArr = [];
for (let i = 0; i < 100; i++) {
  testArr.push(parseInt(Math.random() * (10 - 5 + 1)) + 5);
}
quickSort(testArr)
console.log(testArr);