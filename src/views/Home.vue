<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {}
  },
  created () {
    this.$http.get('/api/users').then(res => {
      console.log(res)
      // this.questions = res.data
      return res.data
    })
  }
}
</script>
