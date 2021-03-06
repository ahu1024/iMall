const baseURL = '';
const domain = '';
const Axios = require('axios').create({
  baseURL: baseURL,
  timeout: 0,
//   withCredentials: true, // 允许跨域 cookie
  maxContentLength: 2000,
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    try {
      data = JSON.parse(data);
    } catch (e) {

      data = {};
    }
    return data;
  }],
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
});

// get
export const _get = (req) => {
  return Axios.get(req.url, {
    params: req.data
  })
}
// post
export const _post = (req) => {
  return Axios({
    method: 'post',
    url: req.url,
    data: req.data
  })
}
