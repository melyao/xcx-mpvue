import Vue from 'vue'
import App from './App'
import axios from 'axios'

axios.defaults.adapter = function(config) {
  let baseURL;
  if (process.env.METHOD === 'dev') {
    baseURL = 'https://cnodejs.org' // 本地代理1(100次/小时)
  } else if (process.env.METHOD === 'proxy2') {
    baseURL = 'http://localhost:3002' // 本地代理2(100次/小时)
  } else if (process.env.METHOD === 'nginx') {
    baseURL = 'https://www.daxierhao.com/v2/movie' // nginx 代理(100次/小时)
  }
  console.log('baseURL',baseURL)
  //发交易之前显示加载中
  wx.showLoading({ title: '拼命加载中...' })
  //发交易调用(开发放开注释)
  return new Promise((resolve, reject) => {
    console.log(config);
    wx.request({
      ...config,
      url: baseURL + config.url,
      data: config.params,
      success: res => {
        console.log(res)
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
