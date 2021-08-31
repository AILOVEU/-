
/**
 * func.bind(obj,args)(args)
 * @param {*} target this重新指向的目标
 * @returns 
 */
Function.prototype._bind = function(target) {
    // 获取第一层变量
    let args = Array.prototype.slice.call(arguments,1);
    let context = this;
    let bindF = function() {
        // 将第一次变量和第二次合并
        args.push(...arguments);
        // 执行函数并返回
        if(this instanceof context) { // new
            return context.apply(this,args);
        }
        return context.apply(target,args);
    }
    let F = function(){};
    F.prototype = context.prototype;
    bindF.__proto__ = new F(); // 将bindF的原型通过F指向context
    return bindF;
}

// 伪代码
/**
 * 
Function.prototype._bind = function(target,...args) { // 定义在Function上
    let args = [];
    args.push(arguments,1);
    let context = this;
    let bindF = function() {
        args.push(arguments);
        let obj = this instanceof context ? this : target; // bind要绑定target的，如果new了，this要指向bind本身
        return context.apply(obj, args); // 返回函数执行结果
    }
    bindF.__proto__ = context;
    return bindF; // 返回函数
}
 * 
 */