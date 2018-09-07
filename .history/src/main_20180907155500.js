import Vue from 'vue'
import App from './App'
import axios from 'axios'

axios.defaults.adapter = function(config) {
  let baseURL;
  if (process.env.NODE_ENV === 'development') {
    baseURL = 'https://cnodejs.org' 
  } else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://localhost:3002' 
  }
  // console.log('baseURL',baseURL)
  //发交易之前显示加载中
  wx.showLoading({ title: '拼命加载中...' })
  //发交易调用(开发放开注释)
  return new Promise((resolve, reject) => {
    console.log(config.params);
    wx.request({
      ...config,
      url: baseURL + config.url,
      data: config.params,
      success: res => {
        // console.log(res)
        if (res.statusCode < 200 || res.statusCode > 300) {
          return reject(res.data || {});
        }
        return resolve(res.data || {});
      },
      complete: res => {
        wx.hideLoading()
        // TODO:
      }
    });
  })
}
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http= axios

const app = new Vue(App)
app.$mount()
