function createCatch() {
  const cache = {};
  return {
    // 创建闭包函数
    get: (key) => {
      return cache[key]
    },
    set: (key, value) => {
      cache[key] = value
    }
  }
}


let c = createCatch();
c.set('a',1);
console.log(c.get('a'));