<template>

  <button
    class="btn"
    disabled="true"
  >primary</button>

</template>

<script setup lang='ts'>
import { toRefs } from 'vue'
import { ButtonProps } from './index.ts'
const props = defineProps<ButtonProps>()
const { disabled } = toRefs(props)
console.log('disable', disabled.value)
// console.log('props', props)
</script>

<style lang="scss" scoped>
.btn{
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
  height: 32px;
  width: 76px;
  line-height: 1;
  font-family: inherit;
  font-weight: 400;
  color: #606266;
  border-color: #dcdfe6;
  &:hover{
    background-color: #a0cfff;
    color: #409eff;
  }
  &:active{
    background-color: #a0cfff;
    color: #409eff;
  }
}
</style>