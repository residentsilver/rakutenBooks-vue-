<template>
  <v-app>
    <div>
      <!-- Aタグのリンクの代わり -->
      <!-- <router-link to="/">Home</router-link> -->
      <router-link to="/add">Add</router-link>
      <router-link to="/home">Homeのみ</router-link>
    </div>
    <v-main>
      <router-view />
      <!-- <Book v-on:result-event="change_book" v-for="abc in books" v-bind:book="abc" v-bind:key="abc.id" /> -->
    </v-main>
    <v-container>
      <!-- <CreateBook v-on:result-event="change_book" /> -->
    </v-container>


    <!-- router/index.jsで書いたコンポーネントが反映 -->


  </v-app>
</template>

<script>
import Book from './components/Book.vue'
import CreateBook from './components/createBook.vue'

export default {
  name: 'App',
  // 呼び出す子のコンポーネントを宣言
  components: {
    // Book,//子の○○.vueのこと
    // CreateBook,
  },
  //data()に定義した変数はファイル全体で呼び出すことができる。
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