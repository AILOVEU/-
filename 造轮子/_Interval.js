function _Interval(fn,wait) {
    let args = [].slice.call(arguments,2)
    let timerObj = {};
    function interval() {
        fn.apply(null,args);
        timerObj.timer = setTimeout(interval,wait)
    }
    interval();
    return timerObj;
}


let func = function(a,b) {
    console.log(a+b);
    return a+b;
}
let {timer} = _Interval(func,1000,1,2)
console.log(timer);



/**
 * 
 * 
 * const setInterval3 = (func, interval) => {
    let startTime = Date.now();
    const config = { shouldStop: false }
    const check = () => {
        if (!config.shouldStop) {
            if (Date.now() - startTime > interval) {
                func();
                startTime = Date.now();
            }
            if(typeof window === 'undefined') {
                setImmediate(check);
            } else {
                window.requestAnimationFrame(check)
            }
        }
    }
    check();
    return config;
}

const myClearInterval = config => { config.shouldStop = true; }
 */