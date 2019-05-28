import cheerio from 'cheerio';

export interface Course {
  imgUrl: string,
  title: string,
  class: string,
  date: string,
}

export const parseTotal = (data) => {
  const $ = cheerio.load(data);

  const lastLI = $('ul.pagination').children().last().text();
  const numReg = /[0-9]+/g;

  const matchNum = lastLI.match(numReg);

  if (!matchNum) throw Error('no total page found');

  const total = Number(matchNum[0]);
  return total;
}

export const parseCourseList = (data: string): Course[] =>{
  const $ = cheerio.load(data);

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