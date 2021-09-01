
function PromiseRace(_promises) {
    if(!isIterator(_promises)) {
        return new TypeError('NOT Iterator')
    }
    // 判断是否是可迭代对象
    let promises = Array.from(_promise);
    return new Promise( (resolve,reject) => {
        for(let i=0;i<promises.length;i++) {
            promises[i].then( r => {
                resolve(r);
            }).catch( e=> {
                reject(e);
            })  
        }
    })
}

// 判断是否是可迭代对象
function isIterator(ob) {
    if(typeof obj === 'object' && obj !==null && typeof obj[Symbol.Iterator] === 'function' ) {
        return true;
    }
    return false;
}