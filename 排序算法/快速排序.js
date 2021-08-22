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
    quick(arr, left, i-1);
    quick(arr, i + 1, right)
  }
}

// 测试用例
let testArr = [];
let arrLen = 1000;
let numMax = 100;
let numMin = 1;
for (let i = 0; i < arrLen; i++) {
  testArr.push(parseInt(Math.random() * (numMax - numMin + 1)) + numMin);
}
quickSort(testArr)

let sortFlag = 0;
testArr.reduce((a,b) => {
  if(a>b) {
    sortFlag += 1;
  }
  return b;
})
console.log(testArr);
console.log(`是否是升序排列：${sortFlag === 0 ? true : false}`);