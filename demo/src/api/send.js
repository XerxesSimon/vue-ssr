import axios from 'axios'

// type multipart/form-data
export async function post (url, data = '', type = 'application/json') {
  const res = await axios({
    url: url,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': type
    }
  })
  return res.data
}

export async function deletes (url, data = '', type = 'application/json') {
  const res = await axios({
    url: url,
    method: 'delete',
    data: data,
    headers: {
      'Content-Type': type
    }
  })
  return res.data
}

export async function put (url, data = '', type = 'application/json') {
  const res = await axios({
    url: url,
    method: 'put',
    data: data,
    headers: {
      'Content-Type': type
    }
  })
  return res.data
}

export async function get (url, data = '', type = 'application/json') {
  const res = await axios({
    url: url,
    method: 'get',
    params: data,
    headers: {
      'Content-Type': type
    }
  })
  return res.data
}

export function send (url, method, data = '', type = 'application/json') {
  if (method === 'post') {
    return post(url, data, type)
  }
  if (method === 'deletes') {
    return deletes(url, data, type)
  }
  if (method === 'put') {
    return put(url, data, type)
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
