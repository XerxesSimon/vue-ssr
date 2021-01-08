<template>
  <div class="background">
    <div class="body">
      <div class="http404-container">
        <center><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599325158281&di=89266a61f204f325f0278a1484e3bfd7&imgtype=0&src=http%3A%2F%2Fwww.webjilu.com%2Fuploads%2Fallimg%2F140512%2F1-1405121636330-L.gif">
        </center>

        <div class="title">抱歉，您要访问的页面不存在</div>
        <div class="desc">（也可能是因为这个页面并不对外公开）</div>

        <div class="times">
          <p class="time">{{time}}</p> 秒后将返回上一个界面
        </div>

        <div class="button">
          <el-button round @click="back()">返回上一页</el-button>
          <el-button type="primary" round>返回主页</el-button>
        </div>

        <div class="btn" @click="handleBack()">
          您认为这是一个故障？请联系
          <el-link :underline="false" type="primary">
            技术支持
          </el-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 5
    }
  },
  mounted () {
    this.timer()
  },
  methods: {
    handleBack () {
      this.$router.push('/')
    },
    back () {
      this.$router.go(-1)// 返回上一层
    },
    cal () {
      this.time = this.time - 1
      if (this.time === 0) {
        this.back()
      }
      this.timer()
    },
    timer () {
      setTimeout(() => { this.cal() }, 1000)
    }
  }
}
</script>

<style scoped>
.background {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  min-width: 1400px;
  height: 100%;
  min-height: 900px;
}
.body {
  width: 704px;
  margin: auto;
  padding: 0;
  padding-top: 50px;
  bottom: 0;
}
.title {
  margin-top: 30px;
  font-size: 23px;
  color: #333;
  text-align: center;
}
.desc {
  margin-top: 10px;
  font-size: 16px;
  color: #999;
  text-align: center;
}
.button {
  margin-top: 50px;
  padding-left: 230px;
}
.btn {
  margin-top: 80px;
  font-size: 14px;
  text-align: center;
}
.times {
  margin-top: 50px;
  font-size: 25px;
  color: #333;
  text-align: center;
}
.time {
  color: red;
  display: inline;
}
</style>
