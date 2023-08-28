

<template>
  <div>
    <h1>welcome</h1>
    <!-- <el-button>去登录</el-button>   -->
    <router-view></router-view>
    <router-link to="/login">去登录</router-link>
    
  </div>
  
</template>

<script>
  export default {
    name: 'Welcome'
  }
</script>
<style scoped>
</style>
