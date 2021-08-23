/**
 * 节流函数，时间戳版本
 * @param {*} func 
 * @param {*} wait 
 * @returns 
 */
function throttle_timestamp(func,wait) {
    let prev = 0;
    return function() {
        let now = Date.now();
        let args = arguments;
        // 当前时间wait后的事件才会执行
        if(now-prev>wait) {
            func.apply(this,args);
            prev = now;
        }
    }
}
function throttle_settimeout(func,wait) {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;
        if(timer) return; // 如果有定时任务，则不处理
        timer = setTimeout( ()=> {
            func.apply(context,args);
            timer = null; // 定时任务执行完成，赋值为空
        },wait)
    }
}
// 函数执行
// 执行 throttle 函数返回新函数
const betterFn = throttle_timestamp(() => console.log('fn 函数执行了'), 1000)
// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
setInterval(betterFn, 10)