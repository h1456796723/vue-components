
<template>
  <header class="header">
    组件
  </header>
  <div class="main">
    <div class="menu"></div>
    <div class="container">
      <!-- <router-view></router-view> -->
      <Button></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/views/Button/index.vue'
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 55px;
  z-index: 999;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
  .menu{
    width: 312px;
  }
  .container{
    flex: 1;
  }
}
</style>
