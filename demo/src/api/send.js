import axios from 'axios'

// type multipart/form-data
export function add (url, data = '', type = 'application/json') {
  return axios({
    url: url,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': type
    }
  }).data
}

export function del (url, data = '', type = 'application/json') {
  return axios({
    url: url,
    method: 'delete',
    data: data,
    headers: {
      'Content-Type': type
    }
  }).data
}

export function mod (url, data = '', type = 'application/json') {
  return axios({
    url: url,
    method: 'put',
    data: data,
    headers: {
      'Content-Type': type
    }
  }).data
}

export function get (url, data = '', type = 'application/json') {
  return axios({
    url: url,
    method: 'get',
    params: data,
    headers: {
      'Content-Type': type
    }
  }).data
}

export function send (url, method, data = '', type = 'application/json') {
  if (method === 'add') {
    return add(url, data, type)
  }
  if (method === 'del') {
    return del(url, data, type)
  }
  if (method === 'mod') {
    return mod(url, data, type)
  }
  if (method === 'get') {
    return get(url, data, type)
  }
  return null
}

// https://blog.csdn.net/zhenwei1994/article/details/84399999
// post 添加数据（增）
// delete 删除数据（删）
// put 更新数据（改）
// get 查询数据（查）
// params 请求参数拼在 url 上
// data 请求参数拼在主体上
