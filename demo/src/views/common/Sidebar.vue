<template>
  <div class="background" :style="{'width': width}">
    <div class="top">
      <el-avatar shape="square" :size="40" :src="avatarUrl" />
      <div class="msg" v-if="!isCollapse">
        <p class="msg-description"> {{name}} </p>
        <p class="msg-description" style="color: #888"> {{description}} </p>
      </div>
    </div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" :router="true" :collapse-transition="false" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item v-for="item in commentIds" :key="item.url" :index="item.url">
        <i :class="item.class"></i>
        <span slot="title">{{item.data}}</span>
      </el-menu-item>

      <!-- <el-menu-item class="bottom" @click="isCollapse=!isCollapse">
        <i class="el-icon-s-fold" v-if="!isCollapse" id="unclose"/>
        <i class="el-icon-s-unfold" v-if="isCollapse" id="close">Collapse sidebar</i>
      </el-menu-item> -->
    </el-menu>
    <div class="bottom" @click="change()">
      <i class="el-icon-s-fold" v-if="!isCollapse" id="unclose"> Collapse sidebar</i>
      <i class="el-icon-s-unfold" v-if="isCollapse" id="close" />
    </div>
    <!-- <i class="el-icon-arrow-left"/><i class="el-icon-arrow-left"/> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatarUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      name: 'xiaohei',
      description: 'a xiangmu ',
      width: '200px',
      isCollapse: false
    }
  },
  props: {
    commentIds: []
  },
  methods: {
    change () {
      this.isCollapse = !this.isCollapse
      if (this.width === '200px') {
        this.width = '60px'
      } else {
        this.width = '200px'
      }
    }
  }
}
</script>

<style scoped>
.background {
  margin: 0;
  border: 0;
  padding: 0;
  /* position: relative; */
  height: 100%;
  /* width: width; */
  background: #545c64;
}
.el-menu-vertical-demo {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  /* width: 220px; */
}

.top {
  margin: 0;
  border: 0;
  padding: 20px 10px 0 10px;
}
.msg {
  margin: 0 0 0 10px;
  border: 0;
  padding: 0;
  vertical-align: top;
  height: 40px;
  width: 120px;
  display: inline-block;
}
.msg-description {
  margin: 0;
  border: 0;
  padding: 0;
  height: 20px;
}
#close {
  padding: 20px;
  font-size: 16px;
  color: #fff;
}
#unclose {
  padding: 20px;
  font-size: 16px;
  color: #fff;
}
.bottom {
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 56px;
}
</style>
