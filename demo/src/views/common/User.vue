<template>
  <div class="face-title">
    <el-link :underline="false" type="info" :href="commentIds.url">
      <div class="user-header">
        <el-avatar :size="75" :src="commentIds.avatarUrl" />
      </div>
      <div class="user-msg">
        <p class="user-name"> {{commentIds.userName}} </p>
        <p id="user-introduce"> {{commentIds.userMsg}} </p>
      </div>
    </el-link>
  </div>
</template>

<script>
export default {
  props: {
    commentIds: null
  }
}
</script>

<style scoped>
.face-title {
  margin: 0;
  border: 0;
  padding: 0;
  height: auto;
  width: 280px;
  display: inline-block;
}
.user-header {
  margin: 0;
  border: 0;
  padding: 0;
  width: auto;
  height: auto;
  display: inline-block;
  color: #fff;
}
.user-msg {
  margin: 0;
  border: 0;
  padding: 12px 0 0 10px;
  display: inline-block;
  vertical-align: top;
}
.user-name {
  margin: 0;
  border: 0;
  padding: 0;
  line-height: 21px;
  font-size: 16px;
  width: 180px;
  color: rgb(51, 51, 51);
}
#user-introduce {
  margin: 0;
  border: 0;
  padding: 11px 0 0 0;
  line-height: 21px;
  font-size: 16px;
  width: 180px;
  color: rgb(153, 153, 153);
}
</style>
