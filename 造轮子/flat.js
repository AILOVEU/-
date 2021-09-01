// 多维数组，降1维数组
function flat(arr) {
    if(!arr.some( item=> Array.isArray(item) )) {
        return arr;
    }
    // [].concat(1,2,[1,2]) // -> [1,2,1,2]
    return flat( [].concat(...arr)  ); // 将arr展开到[]

}

console.log(flat([1,2,[3,4,[5,6,[7,8]]]]));