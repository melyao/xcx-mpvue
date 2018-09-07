<template>
  <div class="container" >
    <div class="usermotto">
      <template v-for="item in arr">
        <card :key="item">{{item}}</card>
      </template>
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
      arr: [1, 2, 3]
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
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>
.usermotto {
  width: 100%;
}

</style>
