<template>
  <div>
    <h1>Log in</h1>
    <el-button @click="goHome">回首页</el-button>
  </div>

</template>

<!-- 注释掉的这种就是composition API -->
<!-- <script setup>
import {defineProps, reactive} from 'vue'
import {useRouter} from 'vue-router'

defineProps({
  msg: String
})
const state = reactive({counter: 0})
const router = useRouter()
const goHome = ()=>{
  router.push('./welcome')
}
</script> -->
<script>
  export default {
    name: 'Login',
    methods: {
      goHome(){
        this.$router.push('./welcome')
      }
    }
  }
</script>

<style scoped>

</style>
