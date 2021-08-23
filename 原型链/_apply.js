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