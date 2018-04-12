<template>
  <div id="bookcomponent">
    <h1>This is a title.</h1>
    <a href="mailto:cydyx00@vip.qq.com"> written by {{ author }} </a>
    <h2>Ranks</h2>
    <ul>
      <li v-for="book in books">{{book.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "bookComponent",
    data() {
      return {
        author: 'KonCheng<cydyx00@vip.qq.com>',
        books: []
      }
    },
    mounted: function () {
      this.$http.get('/api/book/get', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        this.books = response.data.books;
      }), function (response) {
        console.log(response);
      }
    }
  }
</script>

<style scoped>

</style>
