<template>
        <div>
            
        </div>
<div class="center">
    <form @submit.prevent="submitForm">
        名前 <input type="text" v-model="name" >
        価格 <input type="text" v-model="price" >
        <input type="submit" value="確定する">
    </form>
</div>
    </template>


<script>
import axios from 'axios';

export default {
name: "CreateBook",
    props: {
        books: Object
    },
    data() {
        return {
            name: "android",
            price: 500,
            submit:Object,
        };
    },
    mounted() {
    },
    
    methods: {
        submitForm() {
            axios.post('http://127.0.0.1:8000/api/create', {
                name: this.name,//左がカラム名 右がvmodelの名称
                price: this.price,
            })
            .then(() => {
                this.name = '';
                this.price = '';
                // // 修正: データを再取得する関数を呼び出す
                this.getBooks();
            }
            );
        },

        // 修正: データを取得する関数の実装
        getBooks() {
            axios.get('http://127.0.0.1:8000/api/test')
              .then(response => {
                  this.submit = response.data;
                  this.$emit('result-event',this.submit)
              })
              .catch(error => {
                  console.error('データの取得に失敗しました。', error);
              });
        },
    }
}
</script>

<style>
.center{
    margin: auto auto;
    text-align: center;
}
</style>