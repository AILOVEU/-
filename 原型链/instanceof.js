/**
 * 判断B 是否在 A的原型链上
 * @param {*} A
 * @param {Object} B
 */
function _instanceof(A,B) {
  // instanceof右边需要是function
  if( typeof B!== 'function'){
    return new TypeError('right need callback');
  }
  // 基础类型不能通过instanceof判断原型链
  if(!['object','function'].includes(typeof A) || A == null) {
    return false;
  }
  while(A) {
    if(A.__proto__ === B.prototype) return true;
    A = A.__proto__;
  }
  return false;
}

console.log(_instanceof(1,Number));
console.log(_instanceof(new Number(1),Number));
console.log(_instanceof(new Number(1),Object));
console.log(_instanceof(null,Object));

// 伪代码
/**
 * 
let _instanceof = function(A,B) {
  if B not function:
    return new TypeError('right need callback');
  if typeof A not in ['function','object'] or A === null:
    return false;
  while(A) {
    A.__proto__ === B.prototype &&  return true;
    A = A.__proto__;
  }
  return false;
} 
 * 
 */