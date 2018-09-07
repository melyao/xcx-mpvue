<template>
  <div class="card">
    <div class="head">
      <img src="../../static/img/head.jpg" class="headImg"/>
      <span>罂粟omg</span>
    </div>

  </div>
</template>

<script>
export default {
  props: []
}
</script>

<style scoped>
.card{
  margin-bottom: 10px;
  position: relative;
  padding: 16px 20px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-sizing: border-box;
}
.head{
  font-size: 15px;
  display: flex;
  flex-direction: row;
}
.head span{
  margin-left: 10px;
}
.headImg{
  display: block;
  width: 24px;
  height: 24px;
}
</style>
