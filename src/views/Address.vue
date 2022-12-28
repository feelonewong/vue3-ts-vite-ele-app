<template>
  <div class="address-component">
   <Header title="选择收货地址" :is-left="Boolean(true)"></Header>
   <div class="city-search">
    <div class="search">
      <span class="city">{{ city }}<i class="fa fa-angle-down"></i></span>
      <i class="fa fa-search"></i>
      <input type="text" 
        v-model="searchValue"
        style="border:1px solid red"
        placeholder="小区/写字楼/学校等等"
      >
    </div>
   </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, watch} from "vue"
import Header from "@/components/Header.vue"
import {useStore} from "@/store"
const searchValue = ref<string>("")
const store = useStore()
const AMap = (window as any).AMap
const city = computed(() => {
  return store._city
})
watch(searchValue,(newValue, oldValue) => {
  if (searchValue.value === "") {
    return
  }
  // POI搜索
  AMap.plugin('AMap.Autocomplete', function(){
  // 实例化Autocomplete
  var autoOptions = {
    //city 限定城市，默认全国
    city: city.value
  }
  var autoComplete= new AMap.Autocomplete(autoOptions);
  autoComplete.search(searchValue.value, function(status:string, result:any) {
    // 搜索成功时，result即是对应的匹配数据
    console.log(result, "result")
  })
})
})
</script>