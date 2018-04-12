<template>
  <div id="rankcomponent">
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
    name: "firstComponent",
    data() {
      return {
        author: 'KonCheng<cydyx00@vip.qq.com>',
        books: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        this.books = response.data.subjects;
      }), function (response) {
        console.log(response);
      }
    }
  }
</script>

<style scoped>

</style>
