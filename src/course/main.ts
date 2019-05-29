import { parseMainSite } from './mainCourseSite';

async function mainLogic() {
  const url = 'https://www.socclass.com/lnedus/school/dlsyxx'; 
  
  const courseList = await parseMainSite(url);

  const gradeOneMathList = courseList.filter(o => o.grade === '一年级 数学');

  console.log(JSON.stringify(gradeOneMathList));
}

mainLogic();