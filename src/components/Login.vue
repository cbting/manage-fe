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
import Welcome from './Welcome.vue'
export default {
  name: 'Login',
  components:{
    Welcome
  },
  mounted(){
    this.$request({
      method: 'get',
      url: '/login',
      data: {
        name:'cbt',
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  methods: {
    goHome(){
      this.$router.push('./welcome')
    }
  }
}
</script>

<style scoped>

</style>
