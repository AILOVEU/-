/**
 * 手写promise.all
 * @param {*} _promises 
 * @returns 
 */
function PromiseAll(_promises) {
    // 返回一个promise
    return new Promise( (resolve,reject)=> {
        let promises = Array.from(_promises);
        const result = [];
        let count = promises.length;
        for(let i=0;i<promises.length;i++) {
            Promise.resolve(promises[i]).then( p => {
                result[i] = p;
                if(--count) {
                    // 所有数据请求完成
                    resolve(result);
                }
            }).catch( e=> reject(e))
        }
    }); 
}
