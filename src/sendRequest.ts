

import { doOnce, repeatRand } from './utils'

const mapUrlList = (urls: string[]) => urls.map(url => fetch(url));

function sendRequest(urls: string[], max: number, callback: () => void) {
  if (urls.length === 0) {
    callback();
    return;
  }
  
  const reqList = urls.splice(0, max);
  Promise.all(mapUrlList(reqList)).then((respList) => {
    sendRequest(urls, max, callback);
  });
}

async function sendRequest2(urls: string[], max: number, callback: () => void) {

  while(urls.length > 0) {
    const reqList = urls.splice(0, max);
    await Promise.all(mapUrlList(reqList));
  }

  callback();
}

enum ReqState {
  Active = 0,
  Progress,
  Done,
}

interface Request {
  url: string,
  state: ReqState
}

// simulate fetch
function doFetch(url: string) {
  return new Promise((resovle, reject) => {
    const wait = Math.floor(Math.random() * 3000);
    setTimeout(() => {
      resovle(`${url} ${repeatRand(10)}`);
    }, wait);
  });
}

function sendRequest3(urls: string[], max: number, callback: () => void) {
  const mapUrl = (url: string): Request => ({url, state: ReqState.Active});
  let reqList = urls.splice(0, max).map(mapUrl);

  function addNewRequest() {
    reqList = reqList.filter(req => req.state != ReqState.Done);
    
    //no new request
    if (urls.length === 0) {
      // no progressing request
      reqList.length === 0 && doOnce(callback);
      return;
    };

    const sub = max - reqList.length;
    const subList = urls.splice(0, sub).map(mapUrl);
    [].push.apply(reqList, subList);

    startRequest(subList);
  }

  function startRequest(urlList: Request[]) {
    urlList.forEach(o => {
      o.state = ReqState.Progress;

      doFetch(o.url).then((resp) => {
        console.log(`req done ${resp}`);
        o.state = ReqState.Done;
        addNewRequest();
      })
    });
  }

  startRequest(reqList);
}

const urls = [
  'www.baidu.com?page=1',
  'www.baidu.com?page=2',
  'www.baidu.com?page=3',
  'www.baidu.com?page=4',
  'www.baidu.com?page=5',
  'www.baidu.com?page=6',
  'www.baidu.com?page=7',
  'www.baidu.com?page=8',
  'www.baidu.com?page=9',
  'www.baidu.com?page=10',
  'www.baidu.com?page=11'
];

sendRequest3(urls, 4, () => {
  console.log(`all requests finished!`);
});