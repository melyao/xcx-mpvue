<template>
  <div class="container" >
    <div class="usermotto">
      <card></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import axios from 'axios';

export default {
  data () {
    return {
      motto: 'Hello World',
    }
  },

  components: {
    card
  },

  methods: {
    // bindViewTap () {
    //   const url = '../logs/main'
    //   wx.navigateTo({ url })
    // },
    // getUserInfo () {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           this.userInfo = res.userInfo
    //         }
    //       })
    //     }
    //   })
    // },
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // }
    getList () {
      this.$http.get('/api/v1/topics')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    this.getList();
  }
}
</script>

<style scoped>
.usermotto {
  width: 100%;
}

</style>
