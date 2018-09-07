<template>
  <div class="card">
    <div class="head">
      <img :src="item.author.avatar_url" class="headImg"/>
      <span>{{item.author.loginname}}</span>
    </div>
    <div class="content">
      <div class="title">{{item.title}}</div>
      <div class="article">
        {{item.content}}
      </div>
    </div>
    <div class="bottom">
      <div :class="item.good === true || item.top === true ? 'button tab top' : 'button tab'">
        <span>置顶</span>
      </div>
      <div class="button agree">
        <img src="../../static/img/triangle.png" class="icon"/>
        <span>阅读 {{item.visit_count}}</span>
      </div>
      <div class="comment">
        <img src="../../static/img/comment.png" class="comment-icon"/>
        <span>评论 {{item.reply_count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
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
  color: #1a1a1a;
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
  margin-bottom: 20px;
  font-size: 17px;
  max-height: 50px;
  overflow: hidden;
  word-break: break-word;
  line-height: 1.6;
}
.bottom{
  display: flex;
  flex-direction: row;
}
.button{
  text-align: center;
  border: 1px solid;
  border-radius: 3px;
  border-color: transparent;
}
.tab{
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 8px;
  line-height: 25px;
}
.tab.top, .tab.good{
  color: #80bd01;
  background: rgba(49, 160, 73, 0.2);
}
.agree{
  margin-left: 10px;
  color: #80bd01;
  background: rgba(49, 160, 73, 0.2);
  line-height: 30px;
  padding: 0 12px;
  display:flex;
  align-items:center;
}
.icon{
  width: 25px;
  height: 25px;
}
.comment{
  display:flex;
  align-items:center;
  justify-content:center;
  color: #8590a6;
  margin-left: 10px;
}
.comment-icon{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

</style>
