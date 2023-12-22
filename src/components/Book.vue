    <template>
        <div class>
            <v-card class="mx-auto my-2 h-25 " width="1000" elevation="14">

                <v-card-title>
                    {{ book.name }}
                </v-card-title>
                <!-- <img v-bind:src="book_img" alt=""> -->
                <!-- <div class="all">
                <v-card-text class="text">
                    <p>{{ book_caption }}</p>
                </v-card-text>
            </div> -->
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

    </template>
    <script>
    import axios from 'axios';

    export default {
        name: "Book",
        props: {
            book: Object
        },
        data() {
            return {
                id:this.id,
                name: "android",
                price: 500,
                books:Object,
            };
        },
        mounted() {
            // this.book_title = this.book.name;
            // this.book_price = this.book.price;
            this.id=this.book.id;
        },

        methods: {
            submitForm() {
                axios.post('http://127.0.0.1:8000/api/create', {
                    name: this.name,
                    price: this.price,
                    // created_at: this.created_at,
                    // updated_at: this.updated_at,
                })
                .then(() => {
                    this.name = '';
                    this.price = '';
                    // this.created_at ='';
                    // this.updated_at ='';
                    // // 修正: データを再取得する関数を呼び出す
                    this.getBooks();
                }
                );
            },
            deleteForm(){
                axios.post('http://127.0.0.1:8000/api/delete', {
                    id: this.id,
            })
                .then(() => {
                    // this.id ='';
                    this.getBooks();
                }
                );
            },

            // 修正: データを取得する関数の実装
            getBooks() {
                axios.get('http://127.0.0.1:8000/api/test')
                .then(response => {
                    this.books = response.data;
                    this.$emit('result-event',this.books)
                })
                .catch(error => {
                    console.error('データの取得に失敗しました。', error);
                });
            },
        }
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

    .center{
        margin: auto auto;
        text-align: center;
    }
    </style>