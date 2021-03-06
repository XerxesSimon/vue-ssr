import { send } from './send'

export function test () {
  return send('/', 'get')
}

/**
 * 用户登录
 */
export function signin (data) {
  return send('/api/signin', 'post', data)
}

/**
 * 用户退出
 */
export function signout () {
  return send('/api/signout', 'post')
}

/**
 * 用户注册
 */
export function signup (data) {
  return send('/api/signup', 'post', data)
}

/**
 * 忘记密码
 */
export function forget (data) {
  return send('/api/resetpasswd', 'post', data)
}

/**
 * 获取验证码
 */
export function getCaptchacode (data) {
  return send('/api/captchacode', 'post', data)
}

/**
 * 获取用户基本信息
 */
export function getInfo () {
  return send('/user/profile', 'get')
}

/**
 * 获取后台公告列表
 */
export function getManageAnnouncementList (data) {
  return send('/teacher/article/list', 'get', data)
}

/**
 * 创建公告
 */
export function addAnnouncement (data) {
  return send('/teacher/article/add', 'post', data)
}

/**
 * 删除公告
 */
export function delAnnouncement (data) {
  return send('/teacher/article/' + data, 'deletes')
}

/**
 * 修改公告
 */
export function modAnnouncement (data) {
  return send('/teacher/article/list', 'update', data)
}

/**
 * 获取公告
 */
export function getAnnouncement (data) {
  return send('/teacher/article/list', 'get', data)
}

/**
 * 上传图片
 */
export function uploadImg (data) {
  return send('/user/upload/image/upload/0', 'post', data)
}

/*
<input type="file" class="file" @change="upload()" ref="inputer" multiple="multiplt" v-show="false" />

async upload () {
  let formData = new FormData()
  formData.append('upFile', this.$refs.inputer.files[0])
  let res = await uploadImg(formData)
  this.dataForm.img = res.data.url
}
*/