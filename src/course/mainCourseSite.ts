import { rangeFrom } from '../utils';
import 'core-js/es/array';
import { fetchResource, concurrentFetch, UrlPage } from './fetchResource';
import { parseTotal, parseCourseList, Course } from './pageCourse';


export async function parseMainSite(url: string) {
  const homeData = await fetchResource(url, 1);
  const total = parseTotal(homeData);
  const homeCourseList = parseCourseList(homeData);

  const urlList = rangeFrom(2, total).map(page => ({ url, page: String(page)}));
  const fetchList = await concurrentFetch(urlList);

  const courseList = fetchList.map((data) => parseCourseList(data)).flatMap(v => v);

  return homeCourseList.concat(courseList);
}