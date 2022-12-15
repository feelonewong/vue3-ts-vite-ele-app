<template>
  <div class="login-component">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="logo">
    </div>
    <div class="text-group">
      <div class="input-group">
        <input type="text" placeholder="手机号">
        <button @click="getQrCode">获取验证码</button>
      </div>
    </div>
    <div class="text-group">
      <div class="input-group">
        <input type="text" placeholder="验证码">
      </div>
    </div>
    <div class="invalid-feedback">报错信息</div>
    <div class="login-des">
      <p>新用户登录即自动注册，表示已同意<span>《用户服务协议》</span></p>
    </div>
    <div class="login-btn">
      <button>登录</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const getQrCode = function () {
  console.log("getQrCode")
}
</script>