<template>

  <CreateBook v-on:result-event="change_book" />

</template>

<script>
import CreateBook from '../components/createBook.vue'

export default {
  name: 'Add',
  components: {
    CreateBook,
  },
  data() {
    return {
      books: Object,
    }
  },

  async mounted() {
    // const url = 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&keyword=JavaScript&booksGenreId=000&applicationId=1024837784734370415'

    const url = 'http://127.0.0.1:8000/api/test'
    const response = await fetch(url); //urlからデータを取得する
    const data = await response.json() //データをJavaScriptのオブジェクトに変換
    console.log(data) //取得したデータを確認している
    this.books = data //mounted外部へ情報を渡している。

    // const first_item = data.Items[0].name
    // this.book_title = first_item.price
    // this.book_img = first_item.largeImageUrl
  },
  methods: {
    change_book(data) {
      this.books = data;
    }
  }
}
</script>