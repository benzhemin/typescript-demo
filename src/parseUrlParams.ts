/**
 * 请编写一个JavaScript函数parseQueryString，他的用途是把URL参数解析为一个对象
 */

 export {}

 function parseUrlParams(url: string) {
   const params: any = {};

   const [_, query] = url.split('?');
   const pairList = query.split('&');
   pairList.forEach(pair => {
    const [k, v] = pair.split('=');
    !!k && (params[k] = v);
   });

   return params;
 }

const url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
const ps = parseUrlParams(url);
console.log(JSON.stringify(ps));