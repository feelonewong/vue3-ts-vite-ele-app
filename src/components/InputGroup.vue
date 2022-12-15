<template>
  <div class="text-group">
    <div class="input-group" :class="{'is-invalid':error}">
      <input
          :type="type"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      >
      <button
        v-if="btnTitle"
        :disabled="disabled"
        @click="$emit('btnClick')"
      >{{btnTitle}}</button>
    </div>
    <!-- 外层div用于固定错误信息 -->
    <div style="height:15px;">
      <div class="invalid-feedback" v-if="error">{{error}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface propsType {
  type: string;
  placeholder: string;
  modelValue: string;
  btnTitle?: string;
  disabled?: boolean;
  error: string
}
withDefaults(defineProps<propsType>() ,{
  type: "",
  placeholder: "",
  modelValue: "",
  btnTitle: "",
  disabled: false,
  error: ""
})
defineEmits(['btnClick',"update:modelValue"])
</script>


<style scoped></style>