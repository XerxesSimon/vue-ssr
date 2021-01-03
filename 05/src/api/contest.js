import { send } from './send'

/**
 * 创建比赛
 */
export function createContest (data) {
  return send('/teacher/exam/create', 'post', data)
}

/**
 * 获取比赛列表
 */
export function getMyContestList (data) {
  return send('/teacher/exam/my/list', 'get', data)
}

/**
 * 获取比赛所有的章节
 */
export function getMyChapterSection (data) {
  return send('/teacher/exam/my/list/chapters/' + data, 'get')
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


/*************************
 *       用户端
 **************************/
/**
 * 获比赛列表
 */
export function getUserContestList (data) {
  return send('/user/exam/list', 'get', data)
}

/**
 * 获比赛所有的章节
 */
export function getUserAllChapterSection (data) {
  return send('/user/exam/chapters/' + data, 'get')
}

/**
 * 获比赛节
 */
export function getUserSection (data) {
  return send('/user/exam/section/' + data, 'get')
}

/**
 * 更改题目状态
 */
export function modUserSectionStatus (data) {
  return send('/user/exam/section/status/update', 'put', data)
}

/**
 * 交卷
 */
export function submitPaper (data) {
  return send('/user/exam/complete/' + data, 'post')
}

/**
 * 提交答案
 */
export function submitAnswer (data) {
  return send('/user/exam/answer/add', 'post', data)
}

/**
 * 获取最后一次提交记录
 */
export function getSubmitAnswer (data) {
  return send('/user/exam/answer/last', 'get', data)
}

/**
 * 获取比赛基本信息
 */
export function getContestDetail (data) {
  return send('/user/exam/' + data, 'get')
}

/**
 * 比赛成绩获取
 */
export function getUserScore (data) {
  return send('/user/exam/user/score/' + data, 'get')
}