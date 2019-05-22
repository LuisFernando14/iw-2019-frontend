<template>
  <div id="app">
    <div id="nav" class="">
      <Navbar/>
    </div>
    <router-view/>
    <notifications group="foo"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  body {
    background-color: #E5E9F2;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }

  #nav {
    margin-bottom: 2em;
  }

  #footer {
    margin-top: 2em;
    background-color: #005282;
    margin-bottom: 0;
  }

  #imgFooter {
    height: 60px;
  }
</style>
