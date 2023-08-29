<template>
  <router-view></router-view>
</template>
 
<script >
  export default {
    name: 'app',
    mounted(){
      this.$storage.setItem("age","30")
      // console.log(this.$storage.getItem("name"))
      this.$storage.clearAll()
    }
  }
</script>

<style>
 
</style>
