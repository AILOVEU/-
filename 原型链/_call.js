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