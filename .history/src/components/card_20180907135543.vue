<template>
  <div class="card">
    <div class="head">
      <img src="https://avatars1.githubusercontent.com/u/11460601?v=4&s=120" class="headImg"/>
      <span>yllziv</span>
    </div>
    <div class="content">
      <div class="title">杭州 - 九月Node Party 线下技术分享</div>
      <div class="article">
        <div v-html="content"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="button agree">
        <img src="../../static/img/triangle.png" class="icon">
        <span>赞同 110</span>
      </div>
      <div class="button disagree">
        <img src="../../static/img/triangle.png" class="icon dis">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      content: '<div class="markdown-text"><h2>活动说明</h2><h3>本次活动由蚂蚁金服-国际事业群-前端团队承办</h3>我们做过一个七夕特辑，记录了几段关于暗恋的故事。其中有一个女生，暗恋的是一个考取了北大的男生，她为此历尽周折，只为考到北京与他再次相遇，但事与愿违。我们镜头里的她眼眶红红地说：「我考艺考也算是一个传奇…</div>',
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
  margin-bottom: 2px;
  font-size: 17px;
  max-height: 50px;
  overflow: hidden;
}
.button{
  color: #0084ff;
  background: rgba(0,132,255,.1);
  text-align: center;
  border: 1px solid;
  border-radius: 3px;
  border-color: transparent;
}
.agree{
  line-height: 30px;
  padding: 0 12px;
  width: 80px;
  display:flex;
  align-items:center;
}
.disagree{
  width: 50px;
}
.icon{
  width: 20px;
  height: 20px;
  transform:rotate(-180deg);
}
.dis{
  transform:rotate(0deg) !important;
}
</style>
