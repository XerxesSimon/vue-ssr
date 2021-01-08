<template>
  <div class="background">
    <Navbar />
    <div class="center">
      <center>
        <h2>忘记密码</h2>
      </center>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" @keyup.enter.native="reset">
        <el-tabs v-model="registrAtion" stretch="true" @tab-click="handleClick">
          <br>
          <el-tab-pane label="手机验证" name="phone">
            <!-- 手机验证 -->
            <el-cascader class="code-row-left" v-model="select" :options="options" filterable />
            <el-form-item class="code-row-right" prop="phone">
              <el-input v-model="phone" placeholder="手机号" ref="phone" />
            </el-form-item>
            <div class="code-row">
              <el-input class="code-row-left" v-model="verifyCode" placeholder="短信验证码" maxlength="6" minlength="6" />
              <el-button class="code-row-right" type="primary">发送短信验证码</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane label="邮箱验证" name="email">
            <!-- 邮箱验证 -->
            <el-form-item prop="email">
              <el-input v-model="email" placeholder="邮箱号" ref="email" />
            </el-form-item>
            <div class="code-row">
              <el-input class="code-row-left" v-model="verifyCode" placeholder="邮箱验证码" maxlength="6" minlength="6" />
              <el-button class="code-row-right" type="primary">发送邮箱验证码</el-button>
            </div>
          </el-tab-pane>
          <el-form-item prop="password">
            <el-input type="password" v-model="password" placeholder="新密码" />
          </el-form-item>
          <el-form-item prop="verifyPassword">
            <el-input type="password" v-model="verifyPassword" placeholder="确认新密码" />
          </el-form-item>
        </el-tabs>
        <el-button class="login-button" type="primary" @click="reset">重置密码</el-button>
        <el-link class="login" :underline="false" href="/login">返回登录</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/common/Navbar'
import { forget } from '@/api/base'

export default {
  data () {
    return {
      userName: '', // 用户名
      password: '', // 密码
      verifyCode: '', // 验证码
      verifyPassword: '', // 确认密码
      email: '', // 邮箱号
      phone: '', // 手机号
      registrAtion: 'phone', // 默认注册选项， 注册类型
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
    this.$refs['phone'].focus()
  },
  methods: {
    reset: async function () {
      if (this.password.length < 4) {
        this.$message.error('登录密码不能为空')
        return
      }
      if (this.registrAtion === 'phone') {
        this.address = this.phone
      } else {
        this.address = this.email
      }
      const data = {
        'type': this.registrAtion,
        'password': this.password,
        'address': this.address,
        'verifyCode': this.verifyCode,
        'uuid': 'this.uuid'
      }
      let res = await forget(data)
      if (res.status === 2000) {
        let referrer = sessionStorage.getItem('referrer')
        if (referrer != null) {
          this.$router.push(referrer)
        } else {
          this.$router.push('/home')
        }
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.$store.commit('logout')
      } else {
        this.$message.error(res.msg)
      }
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
.background {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  /* background-image: url('../../assets/2.png'); */
}
.center {
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid #e5e5e5;
  padding: 32px;
  width: 400px;
  height: atuo;
  border-radius: 10px;
  background: rgb(236, 236, 236, 0.2);
}

.login-button {
  margin: 0 0 21px 0;
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
</style>
