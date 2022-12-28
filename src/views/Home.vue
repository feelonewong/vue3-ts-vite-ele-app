<template>
  <div class="home-component">
    <div class="header">
      <div class="address-map" @click="router.push('/address')">
        <i class="fa fa-map-marker"></i>
        <span>{{ city }} {{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
      <div class="shop-search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store";
import router from "@/router";
const store = useStore()
const address = computed(() => {
  return store._address
})
const city = computed(() => {
  return store._city
})
</script>