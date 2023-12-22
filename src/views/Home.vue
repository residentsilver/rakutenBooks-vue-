<template>

            <Book v-for="book in books"  :book="book" />


</template>

<script>
import axios from 'axios';
import Book from '../components/Book.vue'

export default {
    name: 'Home',
    components: {
        Book,
    },
    props: {
        book: Object
    },
    data() {
        return{
            books:Object
        }
    },

    // 修正: データを取得する関数の実装
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
    }
</script>

<style>
.price {
    color: red;
    font: bold;
}

.all {
    display: flex;
}

.center {
    margin: auto auto;
    text-align: center;
}
</style>

