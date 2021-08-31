/**
 * apply方法
 * @param {*} obj func的this指向的obj
 * @param {*} args 数组参数
 * @returns 返回执行结果
 */
Function.prototype._apply = function(obj,args) {
    if(obj == null) {
        obj = window;
    }
    obj.fn = this;
    let res = obj.fn(...args);
    delete obj.fn;
    return res;
}

// 执行方法
func._apply(obj, args)


// 伪代码
/**
 * 
Function.prototype.__apply = function(target,args) { // 绑定到Function的原型上
    if(target == null) {
        target = window;
    }
    let context = this; // 调用者本身，即func
    target.fn = context; // 相当于target.func(args)
    let res = target.fn(args); // args是数组就传数组 
    delete target.fn;
    return res; // 返回执行结果
}
 * 
 */