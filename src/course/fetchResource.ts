import axios from 'axios';

export interface UrlPage {
  url: string,
  page: string,
}

export function fetchResource(url: string, params: any) {
  return axios.get(url, { params }).then((resp) => {
    const { status, data } = resp;
    if (status >= 200 && status < 300) {
      // console.log(`data ${data}`);
      return data;
    }
  });
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
