<template>
  <div class="container" >
    <div class="usermotto">
      <!-- <template v-for="item in data"> -->
        <card v-for="item in list" :key="item.id" :item="item"></card>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      list: [
        {
        id: '',
        author: {
          avatar_url: '',
          loginname: ''
        },
        author_id: '',
        content: '',
        create_at: '',
        good: false,
        last_reply_at: '',
        reply_count: '',
        tab: '',
        title: '',
        top: false,
        visit_count: ''
      }
      ],
      page:0
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
          mdrender:false,
          page: self.page
        }
      })
      .then(function (response) {
        if (response.success) {
          
          if(self.page === 0) {
            self.list = response.data;
          } else {
            self.list.push(response.data);
          }
          self.page++;
        }
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
  },
  onReachBottom(){
    // wx.showToast({title: '11111111111'});
    this.getList();
  },
  onPullDownRefresh(){
    // wx.showToast({title: '222222222'});
    this.page = 0;
    this.getList();
  }
}
</script>

<style scoped>
.usermotto {
  width: 100%;
}

</style>
