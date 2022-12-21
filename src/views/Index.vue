<template>
  <div class="index">
    <router-view :tabbarData="tabbarData"></router-view>
    <Tabbar :data="tabbarData"/>
  </div>
</template>

<script setup lang="ts">
import Tabbar from "@/components/Tabbar.vue"
import {ref} from "vue"

const tabbarData = ref([
  {
    title: "首页",
    icon: "home",
    path: "/home"
  },
  {
    title: "订单", 
    icon: "file-text-o",
    path: "/order"
  },
  {
    title: "我的", 
    icon: "user",
    path: "/me"
  }
])
</script>