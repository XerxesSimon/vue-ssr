import { send } from './send'

/*************************
 *       课程前端
 **************************/
/**
 * 展示课程内容
 */
export function getCourseContent (data) {
  return send('/teacher/course/my/section/' + data, 'get')
}

/**
 * 获取分组列表
 */
export function getGroupList (data) {
  return send('/teacher/group/list', 'get', data)
}

/**
 * 获取分组下的用户列表
 */
export function getGroupteachList (data) {
  return send('/teacher/teachs/group/list', 'get', data)
}

/**
 * 获取我的课程列表
 */
export function getMyCourseList (data) {
  return send('/teacher/course/my/list', 'get', data)
}

/**
 * 获取指定课程的章节
 */
export function getMyChapterSection (data) {
  return send('/teacher/course/my/list/chapters/' + data, 'get')
}

/**
 * 获取指定课程的相关信息
 */
export function getMyCourseInfo (data) {
  return send('/teacher/course/id/' + data, 'get')
}

/**
 * 获取指定课程的相关信息
 */
export function getCourseteachList (data) {
  return send('/teacher/teachs/course/list', 'get', data)
}

/**
 * 获取指定课程的相关信息
 */
export function delCourseteach (data) {
  return send('/teacher/teachs/course/del', 'deletes', data)
}

/**
 * 获取指定课程的相关信息
 */
export function modCourseteach (data) {
  return send('/teacher/teachs/course/update', 'put', data)
}

/**
 * 做题 
 */
export function submitCourseProblem (data) {
  return send('/teacher/subject/answer/update', 'post', data)
}

/**
 * 创建小组
 */
export function createGroup (data) {
  return send('/teacher/group/create', 'post', data)
}

/**
 * 更新小组信息
 */
export function updateGroup (data) {
  return send('/teacher/group/create', 'update', data)
}

/**
 * 删除小组
 */
export function delGroup (data) {
  return send('/teacher/group/' + data, 'deletes')
}

/**
 * 获取小组信息
 */
export function getGroup (data) {
  return send('/teacher/group/detail', 'get', data)
}

/*************************
 *       教师后台
 **************************/

/**
  * 创建课程
  */
export function createCourse (data) {
  return send('/teacher/course/create', 'post', data)
}

/**
 * 上传图片
 */
export function uploadImg (data) {
  return send('/teacher/upload/image/upload/0', 'post', data)
}

/**
 * 获取课程分类 
 */
export function getCourseCategories () {
  return send('/teacher/course/categories', 'get')
}

/*************************
 *       班级前端
 **************************/

/**
* 获取班级列表
*/
export function getClassList (data) {
  return send('/teacher/course/my/list', 'get', data)
}

/**
* 获取课程列表
*/
export function getClassIDCourseList (data) {
  return send('/teacher/course/group/list', 'get', data)
}

/**
* 获取学生列表
*/
export function getClassIDStudentList (data) {
  return send('/teacher/teachs/group/list', 'get', data)
}

/**
* 创建班级
*/
export function createClass (data) {
  return send('/teacher/group/create', 'post', data)
}

/**
 * 获取我的班级列表
 */
export function getMyClassList (data) {
  return send('/teacher/group/list', 'get', data)
}

/**
 * 班级添加课程
 */
export function classAddCourse (data) {
  return send('/teacher/course/group/add', 'post', data)
}


/*************************
 *       章
 **************************/
/**
 * 添加章
 */
export function createContestChapter (data) {
  return send('/teacher/exam/chapter/create', 'post', data)
}

/**
 * 删除章
 */
export function delChapter (data) {
  return send('/teacher/exam/chapter/' + data, 'deletes')
}

/**
 * 更新章
 */
export function modChapter (data) {
  return send('/teacher/exam/chapter/update', 'put', data)
}

/**
 * 获取章
 */
export function getChapter (data) {
  return send('/teacher/exam/chapter/' + data, 'get')
}

/*************************
 *       节
 **************************/
/**
 * 添加节
 */
export function addSection (data) {
  return send('/teacher/exam/section/create', 'post', data)
}

/**
 * 删除节
 */
export function delSection (data) {
  return send('/teacher/exam/section/del/' + data, 'deletes')
}

/**
 * 更新节
 */
export function modSection (data) {
  return send('/teacher/exam/section/update', 'put', data)
}

/**
 * 获取节
 */
export function getSection (data) {
  return send('/teacher/exam/section/detail/' + data, 'get')
}

/**
 * 获比赛列表
 */
export function getContestList (data) {
  return send('/teacher/course/exam/list', 'get', data)
}

/**
 * 课程中添加比赛
 */
export function bindCourseContest (data) {
  return send('/teacher/course/exam/add', 'post', data)
}

/**
 * 获取课程列表
 */
export function getUserCourseList (data) {
  return send('/user/course/list', 'get', data)
}

/**
 * 获取指定课程的所有章节
 */
export function getUserCourseChapters (data) {
  return send('/user/course/chapters/' + data, 'get')
}

/**
 * 获取指定课程的所有章节
 */
export function getUserSection (data) {
  return send('/user/course/section/' + data, 'get')
}

/**
 * 教师修改指定章的状态
 */
export function modTeacherChapterStatus (data) {
  return send('/teacher/course/chapter/upstatus', 'put', data)
}

/**
 * 修改  课程 状态
 */
export function modTeacherCourseStatus (data) {
  return send('/teacher/course/upstatus', 'put', data)
}

/**
 * 提交答案
 */
export function submitAnswer (data) {
  return send('/user/course/subject/answer/update', 'post', data)
}

/**
 * 获取用户的成绩
 */
export function getUserSectionRecord (data) {
  return send('/user/course/section/record/list', 'get', data)
}

/**
 * 获取所有用户的成绩
 */
export function getUsersSectionRecord (data) {
  return send('/user/course/section/user/record/list', 'get', data)
}
