<template>
  <el-container class="background">
    <el-header class="header">
      <Navbar />
    </el-header>

    <el-main class="main">
      <div class="signin-body">
        <div class="center">
          <h2 class="login-title">登录</h2>
          <el-form :model="dataForm" status-icon :rules="rules" @keyup.enter.native="submit">
            <!-- 用户名 -->
            <el-form-item prop="userName">
              <el-input v-model="dataForm.userName" placeholder="用户名、手机号或邮箱号" ref="input" />
            </el-form-item>

            <!-- 用户密码 -->
            <el-form-item prop="password">
              <el-input v-model="dataForm.password" placeholder="密码" type="password" />
            </el-form-item>

            <!-- 验证码 -->
            <div class="code-row">
              <el-input class="code-row-left" v-model="dataForm.verify_code" placeholder="邮箱验证码" maxlength="4" minlength="1" />
              <!-- <el-button class="code-row-right" type="primary">发送邮箱验证码</el-button> -->
              <img v-if="verify_code_img  != ''" :src="verify_code_img" class="code-row-right" @click="getVerifyCodeImg">
              <img v-if="verify_code_img == ''" src="@/assets/2.png" class="code-row-right" @click="getVerifyCodeImg">
            </div>

            <el-link class="forgetpassword" :underline="false" href="/forgetpassword" target="_blank">忘记密码</el-link>
            <el-button class="submit-button" type="primary" @click="submit">登录</el-button>
            <el-link class="register" :underline="false" href="/signup" target="_blank">还没有账号？立即注册</el-link>
          </el-form>
        </div>
      </div>
      <el-footer class="footer">
        <Footer />
      </el-footer>
    </el-main>

  </el-container>
</template>

<script>
import { signin, getCaptchacode, getInfo } from '@/api/base'
import Navbar from '@/views/common/Navbar'
import Footer from '@/views/common/Footer'
export default {
  data () {
    return {
      verify_code_img: '',
      dataForm: {
        userName: '',
        password: '',
        verify_code: '',
        uid: ''
      },
      rules: {
        userName: [
          { required: true, message: '帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  mounted: async function () {
    this.$refs['input'].focus()
    // if (this.$store.state.token != null) {
    //   let referrer = sessionStorage.getItem('referrer')
    //   if (referrer != null) {
    //     this.$router.push(referrer)
    //   } else {
    //     this.$router.push('/home')
    //   }
    // }
    this.getVerifyCodeImg()
  },
  methods: {
    getVerifyCodeImg: async function () {
      let uid = ''
      for (var i = 0; i < 32; i++) {
        uid += '1'
      }
      const data = {
        'uid': uid,
        'type': 1
      }
      let res = await getCaptchacode(data)
      this.dataForm.uid = res.data.uid
      this.verify_code_img = res.data.data
    },
    submit: async function () {
      if (this.dataForm.userName.length < 1) {
        this.$message.error('登录账号不能为空')
        return
      }
      if (this.dataForm.password.length < 4) {
        this.$message.error('登录密码不能为空')
        return
      }
      const data = {
        'signinInput': this.dataForm.userName,
        'passwd': this.dataForm.password,
        'uid': this.dataForm.uid,
        'verifyCode': this.dataForm.verify_code
      }
      let res = await signin(data)
      if (res.status === 2000) {
        this.$store.commit('token', res.data.token)
        this.$store.commit('userName', res.data.username)
        this.$store.commit('avatarUrl', res.data.avatarUrl)
        this.$store.commit('nickname', res.data.nickname)

        this.$message({
          message: '登录成功',
          type: 'success'
        })

        let referrer = sessionStorage.getItem('referrer')
        if (referrer != null) {
          this.$router.push(referrer)
        } else {
          this.$router.push('/home')
        }
      } else {
        this.getVerifyCodeImg()
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
  height: 100vh;
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
.signin-body {
  height: calc(100% - 175px - 100px);
  min-height: 570px;
  padding-top: 100px;
}

.center {
  margin: 0 auto;
  /* margin-top: 100px; */
  border: 1px solid #e5e5e5;
  padding: 32px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  background: rgb(236, 236, 236, 0.6);
}
.submit-button {
  margin: 16px 0;
  border: 0;
  padding: 0;
  height: 40px;
  width: 100%;
}
.forgetpassword {
  float: right;
}
.register {
  width: 100%;
  text-align: center;
}
.login-title {
  width: 100%;
  text-align: center;
  margin: 20px 0 40px 0;
  border: 0;
  padding: 0;
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
  padding: 0 80px;
  height: 40px;
  width: 81px;
  vertical-align: top;
  display: inline-block;
}
</style>
