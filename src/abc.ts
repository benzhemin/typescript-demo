
// 前缀解析
const object = {
  'tradingPair': {
    'symbol' : ['BTC/AUD', 'ETH/AUD', 'ETH/BTC'],
  },
  'side': ['ASKf', 'BID'],
};

function transform(obj: any) {
  const res :any[] = [];

  function recursive(o: any, prefix = '') {
    const keys = Object.keys(o);

    keys.forEach((k) => {
      const v = o[k];
      prefix = !!prefix ? prefix + '.' : prefix;
      
      if (Array.isArray(v)) {
        const vkmap: any = v.map((val) => ({[val] : prefix + k + '.' + val}));
        //res.concat(vkmap);
        [].push.apply(res, vkmap);
      } else if (typeof v === 'object' && v != null){
        recursive(v, prefix + k);
      }
    })
  }

  recursive(obj);

  return res;
}

const res = transform(object);

console.log(`res ${JSON.stringify(res)}`);
