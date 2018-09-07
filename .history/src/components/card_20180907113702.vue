<template>
  <div class="card">
    <div class="head">
      <img src="https://avatars1.githubusercontent.com/u/11460601?v=4&s=120" class="headImg"/>
      <span>yllziv</span>
    </div>
    <div class="content">
      <div class="title">「杭州 - 九月」Node Party 线下技术分享</div>
      <div class="article" v-html="content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      content: '<div class="markdown-text"><h2>活动说明</h2><h3>本次活动由蚂蚁金服-国际事业群-前端团队承办</h3></div>',
    }
  },
}
</script>

<style scoped>
.card{
  margin-bottom: 10px;
  background: #ffffff;
  position: relative;
  padding: 16px 20px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-sizing: border-box;
}
.head{
  font-size: 15px;
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
}
.head span{
  margin-left: 10px;
}
.headImg{
  display: block;
  width: 24px;
  height: 24px;
}
.title{
  margin-bottom: 6px;
  width: 100%;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.article{
  max-height: 50px;
  overflow: hidden;
  word-break: break-word;
  line-height: 1.6;
}
</style>
