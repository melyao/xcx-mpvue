<template>
  <div class="container" >
    <div class="usermotto">
      <!-- <template v-for="item in data"> -->
        <card v-for="item in data" :key="item.id" :item="item"></card>
      <!-- </template> -->
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
      list: [{
        id: '',
        author: {
          avatar_url: '',
          loginname: ''
        },
        author_id: '',
        content: '',
        create_at: '',
        good: '',
        last_reply_at: '',
        reply_count: '',
        tab: '',
        title: '',
        top: '',
        visit_count: ''
      }]
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
      let self = this;
      this.$http.get('/api/v1/topics', {
        params: {
          mdrender:false
        }
      })
      .then(function (response) {
        if (response.success) {
          self.list = response.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

  mounted () {
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
