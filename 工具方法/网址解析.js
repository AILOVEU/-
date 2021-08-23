// URLSearchParams 构造函数不会解析完整 URL，但是如果字符串起始位置有 ? 的话会被去除，
// append添加键值，
// get获取值，
// has判断是否存在
// delete删除键值
// toString返回字符串
// set设置值

// 针对已知url字符串
const url = new URL('http://xxx?type=list')
const paramsStr = url.search.slice(1)
const params = new URLSearchParams(paramsStr)
params.get('type') // list

// 普通函数实现
getUrlParam('http://xxx?type=list','type')
function getUrlParam(urlStr, urlKey) {
    const url = new URL(urlStr) // 字符串转换成url格式
    const paramsStr = url.search.slice(1) // 获取'?'后面的参数字符串
    const paramsArr = paramsStr.split('&') // 分割'&'字符 获得参数数组
    for (let i = 0; i < paramsArr.length; i++) {
      const tempArr = paramsArr[i].split('=')
          if (tempArr[0] === urlKey) {
            return tempArr[1]
          }
    }
}

// 正则方式实现
getUrlParam('http://xxx?type=list','type')
function getUrlParam(urlStr, urlKey) {
    const url = new URL(urlStr)
    var reg = new RegExp('[\?\&]' + urlKey + '=([^\&]*)(\&?)', 'i')
    var r = url.search.match(reg)
    return r ? r[1] : ''
}