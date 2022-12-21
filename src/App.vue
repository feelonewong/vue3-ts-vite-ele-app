<template>
  <div>
    <router-view></router-view>
    {{address}}
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
const AMap = (window as any).AMap
const address = ref("")
onMounted(()=>{
  getLocation()
})
const getLocation = ()=>{
  AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
  })

  geolocation.getCurrentPosition(function(status: string,result: any){
    if(status=='complete'){
      // 精准定位成功
      onComplete(result)
    }else{
      onError(result)
    }
  });

  function onComplete (data: any) {
    // data是具体的定位信息
    // 得到经纬度
    const lat = data.position.lat
    const lng = data.position.lng
    //getLatLngLocation(lat, lng)
    getIPLocation()
  }

  function onError (data: any) {
    // 定位出错
    console.log("错误:",data)
    getIPLocation()
  }
})
}
const getLatLngLocation = (lat:string, lng:string)=>{
  AMap.plugin("AMap.Geocoder",function(){
    var geocoder = new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: ''
      })
      const lnglat = [lng, lat]
      geocoder.getAddress(lnglat, function(status: string, result: any) {
        console.log(result, "result")
        if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            console.log(result)
            address.value = result.regeocode.formattedAddress
        }
      })
  })
}

const getIPLocation = ()=>{
  console.log("...")
  AMap.plugin("AMap.CitySearch",function(){
    var citySearch = new AMap.CitySearch()
      citySearch.getLocalCity( function(status: string, result: any) {
        console.log(result)
        if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            console.log(result.rectangle, 'ip')
            address.value = result.rectangle
            
        }
      })
  })

}
console.log(AMap, "AMap")
</script>


<style scoped>
</style>
