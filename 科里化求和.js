function add() {
  // args数组保存所有的参数
  let args = [...arguments];
  // 注意：箭头函数没有arguments
  let inner = function(){
      args.push(...arguments);
      return inner;
  }
  inner.sum= () => {
      return args.reduce((x, y) => {
          return x + y;
      }, 0)
  }
  return inner;
}
console.log(add(1,1,1)(1)(1)(2,3).sum());

// 伪代码
/**
 * 
function add() { // 定义函数
    let args = []; 
    args.push(...arguments)
    let F = function() {
        args.push(...arguments) 
        return F; // 返回函数
    }
    F.toString = function() {
        return sum(args); // 计算args数组的和
    }
    return F;  // 返回函数
}
 *
 */