<template>
  <el-container class="background">
    <el-header class="header">
      <Navbar />
    </el-header>

    <el-main class="main">
      <div class="center">
        <center>
          <h2>注册</h2>
        </center>
        <el-form :model="dataForm" status-icon class="demo-ruleForm">
          <el-tabs v-model="dataForm.type">
            <br>
            <!-- 用户名 -->
            <el-form-item prop="userName">
              <el-input v-model="dataForm.userName" placeholder="用户名" ref="input" />
            </el-form-item>

            <!-- 用户密码 -->
            <el-form-item prop="password">
              <el-input type="password" v-model="dataForm.password" placeholder="密码" />
            </el-form-item>

            <!-- 确认密码 -->
            <el-form-item prop="verifyPassword">
              <el-input type="password" v-model="dataForm.verifyPassword" placeholder="确认密码" />
            </el-form-item>

            <!-- 手机注册 -->
            <el-tab-pane label="手机注册" name="phone">
              <el-cascader class="code-row-left" v-model="select" :options="options" filterable />
              <el-form-item class="code-row-right" prop="phone">
                <el-input v-model="dataForm.phone" placeholder="手机号" />
              </el-form-item>
              <div class="code-row">
                <el-input class="code-row-left" v-model="dataForm.verifyCode" placeholder="短信验证码" maxlength="6" minlength="6" />
                <el-button class="code-row-right" type="primary">发送短信验证码</el-button>
              </div>
            </el-tab-pane>

            <!-- 邮箱注册 -->
            <el-tab-pane label="邮箱注册" name="email">
              <el-form-item prop="email">
                <el-input v-model="dataForm.email" placeholder="邮箱号" />
              </el-form-item>
              <div class="code-row">
                <el-input class="code-row-left" v-model="dataForm.verifyCode" placeholder="邮箱验证码" maxlength="6" minlength="6" />
                <el-button class="code-row-right" type="primary">发送邮箱验证码</el-button>
              </div>
            </el-tab-pane>
          </el-tabs>

          <div class="agree">
            <el-checkbox :v-model="checked">我已阅读并同意相关服务条款和隐私政策</el-checkbox>
            <!-- <input type="checkBox">我已阅读并同意相关服务条款和隐私政策<i class="el-icon-caret-bottom"/> -->
          </div>
          <el-button class="login-button" type="primary" @click="signUp">立即注册</el-button>
          <el-link class="login" :underline="false" href="/login">已有账号，直接登录</el-link>
        </el-form>
      </div>
    </el-main>
    <el-footer class="footer">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import { signup } from '@/api/base'
import Navbar from '@/views/common/Navbar'
import Footer from '@/views/common/Footer'
export default {
  data () {
    return {
      dataForm: {
        userName: '', // 用户名
        password: '', // 密码
        verifyCode: '', // 验证码
        verifyPassword: '', // 确认密码
        email: '', // 邮箱号
        phone: '', // 手机号
        address: null,
        uuid: 'this.uuid',
        type: 'phone', // 默认注册选项， 注册类型
      },
      checked: false,
      options: [
        {
          value: '+86',
          label: '中国 +86'
        },
        {
          value: '+852',
          label: '中国香港特别行政区 +852'
        },
        {
          value: '+853',
          label: '中国澳门特别行政区 +853'
        },
        {
          value: '+886',
          label: '中国台湾政区 +886'
        }
      ],
      select: '+86'
    }
  },
  mounted () {
    this.$refs['input'].focus()
  },
  methods: {
    sendClick () {
      console.log('ok')
    },
    signUp: async function () {
      if (this.dataForm.type === 'phone') {
        this.dataForm.address = this.dataForm.phone
      } else {
        this.dataForm.address = this.dataForm.email
      }
      let res = await signup(dataForm)

      if (res.status === 2000) {
        let referrer = sessionStorage.getItem('referrer')
        if (referrer != null) {
          this.$router.push(referrer)
        } else {
          this.$router.push('/home')
        }
        this.$message({
          message: '注册成功',
          type: 'success'
        })
      } else {
        this.$message.error(res.msg)
      }
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.background {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  min-width: 1400px;
  background-image: url("../../assets/bg.jpg");
}
.header,
.main,
.footer {
  margin: 0;
  border: 0;
  padding: 0;
}
.center {
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid #e5e5e5;
  padding: 32px;
  width: 400px;
  height: atuo;
  border-radius: 10px;
  background: rgb(236, 236, 236, 0.6);
}

.login-button {
  margin: 21px 0;
  width: 100%;
}
.login {
  width: 100%;
  text-align: center;
  font-size: 14px;
  /* color: #000; */
}
.agree {
  font-size: 14px;
}

.code-row {
  margin: 22px 0;
  padding: 0;
  height: 42px;
  width: 100%;
}
.code-row-left {
  margin: 0;
  border: 0;
  padding: 0;
  width: 137px;
  display: inline-block;
  color: #000;
}
.code-row-right {
  margin: 0 0 0 16px;
  border: 0;
  padding: 0;
  height: 40px;
  width: 241px;
  display: inline-block;
}
/* .el-input__inner {
  height: 40px;
  color: #000;
  background: rgb(236, 236, 236, 0.6);
  border: 1px solid #e5e5e5;
} */
.el-icon-success {
  color: #41b146;
  font-size: 20px;
}
.el-icon-warning {
  color: red;
  font-size: 20px;
}
.el-icon-check {
  color: #41b146;
  font-size: 32px;
  margin: 0;
  bottom: 0;
  padding: 0;
  /* height: 32px; */
}
</style>
