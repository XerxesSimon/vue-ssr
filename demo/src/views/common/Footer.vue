<template>
  <div class="footer-background">
    <div class="footer-body">
      <div class="footer-head">
        <div class="footer-head-left">
          <img src="../../assets/logo.png" height="70px" />
          </br>
          <span>
            由XX互联网科技教育有限公司推出，让每个想学习的用户，都能得到高质量的教育。
          </span>
        </div>

        <div class="footer-head-right">

          <div class="footer-head-right-tab">
            <p>关于我们</p>
            <span>公司介绍</span>
            <span>使用协议</span>
            <span>常见问题</span>
          </div>

          <div class="footer-head-right-tab">
            <p>联系我们</p>
            <span>联系方式</span>
            <span>意见反馈</span>
            <span>加入我们</span>
          </div>

          <div class="footer-head-right-tab">

            <p>关注我们</p>

            <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="top">
              <span>微博号</span>
            </el-tooltip>
            <span>抖音号</span>
            <span>微信公众号</span>
          </div>
        </div>
      </div>

      <el-row type="flex" class="row-bg">
        <el-col :span="4">
        </el-col>

        <!-- <el-col :span="1">
          <div class="msg">
            <img src="../../assets/ghs.png" />
          </div>
        </el-col> -->

        <el-col :span="7">
          <div class="msg">
            豫公网安备XXXXXXXXXXXXX号
          </div>
        </el-col>

        <el-col :span="8">
          <div class="msg">
            <el-link href="https://beian.miit.gov.cn/#/Integrated/index" :underline="false">
              豫ICP备2020030055号
            </el-link>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="msg">
            XX互联网科技教育有限公司
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer-background {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 175px;
  background: #000;
}
.footer-body {
  margin: auto;
  border: 0;
  padding: 0;
  width: 1200px;
  color: #fff;
  font-size: 16px;
}
.msg {
  /* display: inline-block; */
  /* vertical-align: top; */
  /* padding-top: 130px; */
  /* padding-left: 50px; */
}
.row-bg {
  /* padding-top: 130px; */
  /* background-color: #f9fafc; */
  font-size: 14px;
  color: #999;
}
.footer-head {
  margin: 0;
  padding: 0;
  border: 0;
  height: 145px;
}
.footer-head-left {
  padding-top: 20px;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  width: 810px;
}
.footer-head-right {
  margin: 0;
  padding: 0;
  border: 0;
  padding-top: 20px;
  width: 390px;
  display: inline-block;
  vertical-align: top;
}
.footer-head-right-tab {
  margin: 0;
  padding: 0;
  border: 0;
  width: 130px;
  text-align: right;
  /* float: right; */
  display: inline-block;
  vertical-align: top;
}
.footer-head-right-tab p {
  margin: 0;
  margin-bottom: 3px;
  font-size: 18px !important;
}
.footer-head-right-tab span {
  padding-top: 5px;
  font-size: 14px !important;
  color: #999;
  display: block;
}
</style>
