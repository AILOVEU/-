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
        if (typeof obj === 'function') {
            return new Function('return ' + obj.toString()).call(this)
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
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let result = obj instanceof Array ? [] : {};
    for (let prop of Object.keys(obj)) {
        result[prop] = deepClone_simpler(obj[prop]);
    }
    return result;
}

// 测试方法
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

// 伪代码
let deepClone = function (obj) {
    let weakMap = new weakMap(); // 定义一个存储obj key的值
    let deep = function (obj) {
        if (!obj) return obj; // 如果为空，直接返回
        if (!['object', 'function'].includes(typeof obj)) return obj;// 是基础类型直接返回
        // 如果是数组
        if (Array.isArray(obj)) {
            let result = [];
            for (let item of obj) {
                result.push(deep(item));
            }
            return result;
        }
        // 判断weakmap中是否有obj
        else if(weakMap.has(obj)) {
            return weakMap.get(obj);
        }
        // 如果是对象
        else if (typeof obj === 'object') {
            let result = {};
            weakMap.set(obj, result); // result是引用后面会被更新
            // 遍历所有的key
            for (let key of Object.keys(obj)) {
                result[key] = deep(obj[key]);
            }
            return result;
        }
    }
    deep(obj);
}

let obj = {

}
deepClone(obj);


//
/**
 * 深拷贝关注点:
 * 1. JavaScript内置对象的复制: Set、Map、Date、Regex等
 * 2. 循环引用问题
 * @param {*} object 
 * @returns 
 */
 function deepClone(source, memory) {
    const isPrimitive = (value) => {
      return /Number|Boolean|String|Null|Undefined|Symbol|Function/.test(Object.prototype.toString.call(value));
    }
    let result = null;
  
    memory || (memory = new WeakMap());
    // 原始数据类型及函数
    if (isPrimitive(source)) {
      console.log('current copy is primitive', source);
      result = source;
    }
    // 数组
    else if (Array.isArray(source)) {
      result = source.map(value => deepClone(value, memory));
    }
    // 内置对象Date、Regex
    else if (Object.prototype.toString.call(source) === '[object Date]') {
      result = new Date(source);
    }
    else if (Object.prototype.toString.call(source) === '[object Regex]') {
      result = new RegExp(source);
    }
    // 内置对象Set、Map
    else if (Object.prototype.toString.call(source) === '[object Set]') {
      result = new Set();
      for (const value of source) {
        result.add(deepClone(value, memory));
      }
    }
    else if (Object.prototype.toString.call(source) === '[object Map]') {
      result = new Map();
      for (const [key, value] of source.entries()) {
        result.set(key, deepClone(value, memory));
      }
    }
    // 引用类型
    else {
      if (memory.has(source)) {
        result = memory.get(source);
      } else {
        result = Object.create(null);
        memory.set(source, result);
        Object.keys(source).forEach(key => {
          const value = source[key];
          result[key] = deepClone(value, memory);
        });
      }
    }
    return result;
  }