import cheerio from 'cheerio';
import axios from 'axios';
import { once } from './utils';

function fetchResource(url: string, page: number) {
  return axios.get(url, {
    params: { page }
  }).then((resp => {
    const { status, data } = resp;
    if (status >= 200 && status < 300) {
      // console.log(`data ${data}`);
      return data;
    }
  }));
}

function parseTotal($: CheerioStatic) {
  const lastLI = $('ul.pagination').children().last().text();
  const numReg = /[0-9]/g;

  const matchNum = lastLI.match(numReg);

  if (!matchNum) throw Error('no total page found');

  const total = Number(matchNum[0]);
  return total;
}

function parseHTML($: CheerioStatic) {
  

  const parseTdFnList: any[] = [
    ($td: Cheerio) => ({ imgUrl: $td.find('img').prop('src')}),
    ($td: Cheerio) => ({ title: $td.find('a').text(), url: $td.find('a').prop('href') }),
    ($td: Cheerio) => ({ class: $td.text() }),
    ($td: Cheerio) => ({}),
    ($td: Cheerio) => ({ date: $td.text()})
  ];

  const courseList: any[] = [];
  $('table').find('tr').each((index, trDom) => {
    const $tr = $(trDom);
    
    const course = {};
    $tr.find('td').each((index, tdDom) => {
      const $td = $(tdDom);

      const parseFn = parseTdFnList[index];
      Object.assign(course, parseFn($td));
    });

    courseList.push(course);
  });

  return courseList;
}

async function mainLogic() {
  const url = 'https://www.socclass.com/lnedus/school/dlsyxx'; 

  let curPage = 1;
  let totalPage = 1;

  while (curPage <= totalPage) {

    const data = await fetchResource(url, curPage);
    const $ = cheerio.load(data);
    once(() => { totalPage = parseTotal($) })
  }
  

  /*
  fetchResource(url).then((data) => {
    parseHTML(data);
  });
  */
}

mainLogic();


