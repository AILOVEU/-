/**
 * call方法
 * @param {*} obj 重新指向的this
 * @param  {...any} args 参数序列
 * @returns 
 */
Function.prototype._call = function(obj,...args) {
    if(obj == null) {
        obj = window;
    }
    obj.fn = this;
    let res = obj.fn(...args); // obj继承func的this的属性
    delete obj.fn;
    return res;
}

func._call(obj,1,2)

// 伪代码
/**
 * 
Function.prototype.__call = function(target,...args) {
    if(target == null) {
        target = window;
    }
    let context = this;
    target.fn = context;
    let res = target.fn(...args); // 传入多个参数
    delete target.fn;
    return res; // 返回函数执行
}
 * 
 */