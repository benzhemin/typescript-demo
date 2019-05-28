import { rangeFrom } from '../utils';
import 'core-js/es/array';
import { fetchResource, concurrentFetch, UrlPage } from './fetchResource';
import { parseTotal, parseCourseList, Course } from './pageCourse';


export async function parseMainSite(url: string) {
  const homeData = await fetchResource(url, 1);
  const total = parseTotal(homeData);

  const urlList = rangeFrom(1, total).map(page => ({ url, page: String(page)}));
  const fetchList = await concurrentFetch(urlList);

  const courseList = fetchList.map((data) => parseCourseList(data)).flatMap(v => v);

  return courseList;
}