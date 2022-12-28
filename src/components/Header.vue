<template>
  <div class="header-component">
    <div class="header-button is-left" v-show="isLeft">
      <i class="fa fa-chevron-left"></i>
      <button @click="$router.go(-1)">返回</button>
    </div>
    <div class="header-title">{{ title }}</div>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  isLeft: boolean;
}>()
</script>

