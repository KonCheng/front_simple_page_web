<template>
  <div id="firstcomponent">
    <h1>This is a title.</h1>
    <a href="mailto:cydyx00@vip.qq.com"> written by {{ author }} </a>
  </div>
</template>
<script>
  export default {
    name: "firstComponent",
    data() {
      return {
        author: 'KonCheng<cydyx00@vip.qq.com>'
      }
    }
  }
</script>

<style scoped>
</style>
