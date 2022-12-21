<template>
  <div class="login-component">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="logo" />
    </div>
    <!-- 手机号 -->
    <input-group
      type="number"
      placeholder="手机号"
      :btn-title="btnTitle"
      :disabled="disabled"
      v-model="phone"
      :error="phoneError"
      @btn-click="getVerifyCode"
    ></input-group>
    <!-- 验证码 -->
    <input-group
      type="number"
      placeholder="验证码"
      :disabled="false"
      v-model="verifyCode"
      :error="codeError"
    ></input-group>
    <div class="login-des">
      <p>新用户登录即自动注册，表示已同意<span>《用户服务协议》</span></p>
    </div>
    <div class="login-btn">
      <button :disabled="isClick" @click="handleLogin" >登录</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, computed } from 'vue'
import { useRouter } from "vue-router"
import InputGroup from '../components/InputGroup.vue'
// 手机号相关
const phone = ref<string>('17356196519')
const btnTitle = ref<string>('获取验证码')
const disabled = ref<boolean>(false)
const phoneError = ref<string>('')
// 验证码相关
const verifyCode = ref<string>('337301')
const codeError = ref<string>('')
// 登录的disabled
const isClick = computed(()=>{
  if(!phone.value || !verifyCode.value) {
    return true
  }else {
    return false
  }
})
const router = useRouter()

// 方法
const validatePhone = ()=>{
  // 判断手机号格式是否正确
  if (!phone.value) {
    phoneError.value = "手机号码不能为空"
    return false
  }else if(!/^1[345678]\d{9}$/.test(phone.value)){
    phoneError.value = "手机号码格式不正确"
    return false
  }else{
    phoneError.value = ""
    return true
  }
}
const handleCounter = ()=>{
  let time = 5
  let timer = setInterval(()=>{
    if(time == 0) {
      clearInterval(timer)
      btnTitle.value = "获取验证码"
      disabled.value = false
    }else {
      btnTitle.value = `${time}后重试`
      disabled.value = true
      time --
    }
  },1000)
}

const getVerifyCode = async ()=>{
  if(validatePhone()){
    // 倒计时
    handleCounter()
    const res = await axios.post(
      "/api/posts/sms_send",
      {
        phone: phone.value
      }
    
    )
    console.log(res) // code : 337301
  }
}


const handleLogin = async ()=>{
  phoneError.value = ""
  codeError.value = ""
    try {
      const res = await axios.post(
        "/api/posts/sms_back",
        {
          phone: phone.value,
          code: verifyCode.value
        }
      )
      if (res.data.msg==='验证成功'){
        // 本地存储相关
        // 页面跳转相关
        const token = res.data.user._id
        localStorage.setItem("token", token)
        router.push("/")
      }
    } catch (e: any) {
      console.log(e)
      codeError.value = e.response.data.msg
    }
}
</script>
