<template>
  <div id="usercomponent">
    <h1>This is usercomponent</h1>
     this user's id is {{ id }} !
  </div>
</template>
<script>
  export default {
    name: "NameComponent",
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style scoped>
</style>
