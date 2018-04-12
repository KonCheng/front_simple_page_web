<template>
  <div id="app">
    <MenuComponent></MenuComponent>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import MenuComponent from '@/components/MenuComponent'
export default {
  name: 'App',
  components:{MenuComponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
