<template>
    <div class="tabbar-component">
    <router-link
        v-for="(item, index) in data"
        :key="index"
        class="tab-item" 
        :to="item.path" 
        active-class="is-selected">
        <div class="tab-item-icon">
            <i :class="'fa fa-'+item.icon"></i>
        </div>
        <div class="tab-item-label">
            {{item.title}}
        </div>
    </router-link>

    </div>
</template>


<script lang="ts" setup>
interface tabbarDataProps {
  title: string;
  icon: string;
  path: string;
}
defineProps<{data:tabbarDataProps[]}>()
</script>

<style scoped></style>