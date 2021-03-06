import axios from 'axios';

export interface UrlPage {
  url: string,
  page: string,
}

/*
export function fetchResource(url: string, params: any) {
  const options = {url, method: 'get', ...params} ;
  return axios(options).then((resp) => {
    const { status, data } = resp;
    if (status >= 200 && status < 300) {
      // console.log(`data ${data}`);
      return data;
    }
  });
}
*/

export async function fetchResource(url: string, params: any) {
  const options = {
    url,
    method: 'get',
    ...params,
  };
  const { status, data } = await axios(options);
  if (status >= 200 && status < 300) {
    return data;
  }
}

export async function concurrentFetch(fetchList: UrlPage[], max: number = 6) {
  const sliceList = fetchList.slice();

  const fetchResList: any[] = [];
  while (sliceList.length > 0) {
    const reqList = sliceList.splice(0, max);

    const resList = await Promise.all(reqList.map(o => {
      const { url, page } = o;
      return fetchResource(url, { page });
    }));

    [].push.apply(fetchResList, resList);
  }

  return fetchResList;
}
