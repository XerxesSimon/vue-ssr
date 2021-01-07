import { send } from './send'

/**
 * 获取题库题目列表 
 */
export function getProblemList (data) {
  return send('/teacher/subject/simplelist', 'get', data)
}

/**
 * 获取用户题目列表 
 */
export function getMyProblemList (data) {
  return send('/teacher/subject/users/list', 'get', data)
}

/**
 * 创建题目
 */
export function addTeacherProblem (data) {
  return send('/teacher/contest/create', 'post', data)
}

/**
 * 获取题库 OJ 题目列表
 */
export function getTeacherOJProblemList (data) {
  return send('/teacher/contest/list', 'get', data)
}

/**
 * 获取普通题目
 */
export function getTeacherProblem (data) {
  return send('/teacher/subject/detail/' + data, 'get')
}

/**
 * 获取 OJ 题目
 */
export function getTeacherOJProblem (data) {
  return send('/teacher/contest/detail/' + data, 'get')
}

/**
 * 用户提交答案
 */
export function addUserAnswer (data) {
  return send('/user/contest/answer/add', 'post', data)
}

/**
 * 获取所有人答案提交记录
 */
export function getUserContestRecordList (data) {
  return send('/user/contest/record/list', 'get', data)
}
