<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="/login" class="btn btn-primary">前往登入頁</router-link>
    <router-link to="/user/cart" class="btn btn-primary">前往產品頁</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  }
}
</script>
