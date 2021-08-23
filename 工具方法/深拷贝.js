/**
 * 深拷贝
 */
function deepClone(obj) {
    const weakMap = new WeakMap();
    function deep(obj) {
        // 基础类型直接返回
        if (typeof obj !== 'object' || obj == null) {
            return obj;
        }
        // Date
        if (obj instanceof Date) {
            return new Date(obj);
        }
        // 正则
        if (obj instanceof RegExp) {
            return new RegExp(obj);
        }
        // 数组
        if (Array.isArray(obj)) {
            let result = [];
            obj.forEach(item => result.push(deep(item)));
            return result;
        }
        // 普通对象
        if (weakMap.has(obj)) {
            return weakMap.get(obj);
        }
        let result = {};
        weakMap.set(obj, result);
        for (let prop of Object.keys(obj)) {
            result[prop] = deep(obj[prop]);
        }
        return result
    }
    return deep(obj);

}

/**
 * 简版深拷贝
 */
function deepClone_simpler(obj) {
    if(typeof obj !== 'object' || obj == null)  {
        return obj;
    }
    let result = obj instanceof Array ? []: {};
    for(let prop of Object.keys(obj)) {
        result[prop] = deepClone_simpler(obj[prop]);
    }
    return result;
}


(function () {
    const a = {
        num: 123,
        say() {
            return 'Hello';
        },
        arr: [1, 2, [4, { name: 'Jack' }]],
        n: null,
        un: undefined,
        d: new Date(),
        reg: /[a-z0-9]+/,
        b: {
            c: {
                d: null
            }
        }
    };
    a.b.c.d = a;
    const copy = deepClone(a);
    console.log(copy)
    console.log(copy === a) // false
    console.log(copy.say()); // Hello
    console.log(copy.arr);
    console.log(copy.arr[2][1] === a.arr[2][1]); // false
    console.log(copy.b.c.d === copy) // true，循环引用得到复制
})();