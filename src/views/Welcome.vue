<template>
  <div class="welcome">
    <div class="content">
      <div class="subtitle">欢迎体验</div>
      <div class="title">XXXXXX后台管理系统</div>
      <div class="desc">Vue3+ElementPlus+Koa2全栈开发后台系统</div>
    </div>
    <div class="img" ></div>
    <!-- <router-link to="/login">去登录</router-link> -->
  </div>
  
</template>

<script>
  export default {
    name: 'Welcome',
  }
</script>
<style lang="scss">
.welcome{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .content{
    position: relative;
    bottom: 40px;
    .sub-title{
      font-size: 30px;
      line-height: 42px;
      color: #333; 
    }
    .title{
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc{
      text-align: right;
      font-size: 18px;
      color: #999; 
    }
  }

  .img{
    margin-left: 105px;
    background-image: url('./../assets/img/welcome.png');
    width: 371px;
    height: 438px;
  }
}
</style>
