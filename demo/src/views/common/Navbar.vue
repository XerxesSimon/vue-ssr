<template>
  <div class="body">
    <div class="head-background">
      <el-menu :default-active="$route.path" class="el-ments" mode="horizontal" background-color="#000" text-color="#fff" active-text-color="#ffd04b" :router="true">
        <!-- <el-menu :default-active="$route.path" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true"> -->

        <!-- logo -->
        <img class="logo" :src="logoUrl" height="40px">
        <!-- <el-avatar class="logo" shape="square" size="large" :src="logoUrl"/> -->

        <!-- 左侧导航栏 -->
        <el-menu-item v-for="(head,index) in headLeft" :key="head.url+index" class="el-menu-left" :index="head.url">
          {{ head.title }}
        </el-menu-item>

        <!-- 右侧搜索栏 用户信息-->
        <el-submenu v-show="logined" class="el-menu-right" index="1">
          <el-menu-item class="target">
            {{ nickname }}
          </el-menu-item>
          <template slot="title">
            <el-avatar :size="40" :src="avatarUrl" />
          </template>
          <el-menu-item v-for="(user,index) in users" :key="user.url+index" class="target" :index="user.url">
            <i :class="user.class" /> {{ user.title }}
          </el-menu-item>
          <el-menu-item class="logout" index="/signin" @click="logoutClick()">
            <i class="el-icon-switch-button" /> {{ logout }}
          </el-menu-item>
        </el-submenu>

        <!-- 右侧搜索栏 登录信息-->
        <el-menu-item v-for="(head,index) in headRight" v-show="head.logined ^ logined" :key="head.url+index" class="el-menu-right" :index="head.url">
          <i :class="head.class" /> {{ head.name }}
        </el-menu-item>

        <!-- 搜索栏模块 -->
        <!-- <el-menu-item class="el-menu-right" id="el-menu-item-searchinput-container" :disabled="true">
        <el-input v-model="input" placeholder="搜索栏"></el-input>
      </el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headLeft: [
        { url: '/', title: '首页' },
        { url: '/learing/course', title: '学习中心' },
        { url: '/problem', title: '题库' },
        { url: '/contest', title: '比赛' }
      ],
      headRight: [
        { url: '/notification', logined: false, class: 'el-icon-bell', name: '' },
        { url: '/chat', logined: false, class: 'el-icon-chat-round', name: '' },
        { url: '/signup', logined: true, class: '', name: '注册' },
        { url: '/signin', logined: true, class: '', name: '登录' }
      ],
      users: [
        { url: '/user/main', title: '个人中心', class: 'el-icon-user' },
        { url: '/teach', title: '教师后端', class: 'el-icon-s-flag' },
        { url: '/setting', title: '账号设置', class: 'el-icon-setting' },
        { url: '/wallet', title: '我的钱包', class: 'el-icon-bank-card' }
      ],
      logined: false,
      activeIndex: '1',
      avatarUrl: '',
      logoUrl: 'https://cn.vuejs.org/images/logo.png',
      input: null,
      logout: '退出',
      nickname: ''
    }
  },
  mounted () {
    if (this.$store.state.token != null) {
      this.avatarUrl = this.$store.state.avatarUrl
      this.logined = true
      this.nickname = this.$store.state.nickname
    }
  },
  methods: {
    logoutClick () {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  background: #000;
}
.head-background /deep/ .el-menu.el-menu--horizontal {
  margin: auto;
  border: 0;
  padding: 0;
  width: 1200px;
  min-width: 1200px;
  height: 60px;
  background: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-menu-left {
  display: block;
  float: left;
}

.el-menu-right {
  display: block;
  float: right !important;
}

.el-menu > .el-menu-item {
  /* el-menu-item 的设置 */
  min-width: 70px;
  padding: 0 5px;
  box-sizing: content-box;
  text-align: center;
}

#el-menu-item-searchinput-container {
  /* 搜索栏设置 */
  cursor: default;
  opacity: 1;
}

.target {
  /* text-align: left;
  height: 20px;
  width: 100px; */
}

.logout {
  border-top: 1px solid #e5e5e5;
}

.logo {
  margin: 11px 5px 10px 0;
  display: block;
  float: left;
}
.el-ments /deep/ .el-menu-item {
  height: 58px;
  /* border: 1px solid red; */
}
</style>
