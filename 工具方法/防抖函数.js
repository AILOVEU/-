/**
 * 防抖函数
 * @param {Function} func 防抖方法
 * @param {Number} wait 延迟等待时间
 * @param {Boolean} immediate 是否立即执行
 */
function debounce(func,wait,immediate) {
    let context = this;  // 
    let timer = null; // 闭包变量，一直存在
    let debounced = function() {
        let args = [...arguments];
        timer && clearTimeout(timer); // 首先清空之前的计时，代表新一次的执行
        if(immediate) {
            let callNow = !timer; //  第一次立即执行
            timer = setTimeout( function(){
                timer = null;
            },wait)
            callNow && func.apply(context,args);
        }
        // setTimeout非立即执行
        else{
            timer = setTimeout( function() {
                func.apply(context, args);
            },wait)
        }
    }
    // 取消执行
    debounced.cancel = function() {
        timer && clearTimeout(timer);
        timer = null;
    }
    // 返回防抖包装后的函数
    return debounced;
}

// 使用方法
let handleClick = debounce( ()=> {
    console.log(1);
},3000,true)

el.addEventListener('click',handleClick);