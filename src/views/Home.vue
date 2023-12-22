<template>
    <v-app>
        <v-main>
            <Book :book="book" />
            <div class>
                <v-card class="mx-auto my-2 h-25 " width="1000" elevation="14">

                    <v-card-title>
                        {{ book.name }}
                    </v-card-title>
                    <v-card-text class="price">
                        <p>{{ book.price }}円</p>
                    </v-card-text>
                </v-card>
                <div class="center">
                    <form @submit.prevent="deleteForm">
                        <input type="hidden" name="id" v-model="id">
                        <input type="submit" value="削除する">
                    </form>
                </div>
            </div>
        </v-main>
    </v-app>
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
        return {
            id: this.id,
            name: "android",
            price: 500,
            books: Object,
        };
    },
    mounted() {
        this.id = this.book.id;
    },


    // 修正: データを取得する関数の実装
    getBooks() {
        axios.get('http://127.0.0.1:8000/api/test')
            .then(response => {
                this.books = response.data;
                this.$emit('result-event', this.books)
            })
            .catch(error => {
                console.error('データの取得に失敗しました。', error);
            });
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

