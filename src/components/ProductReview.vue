<template>
        <form class="review-form" @submit.prevent="submitted">
                <ul v-show="errors.length">
                        <b>Please correct the following error(s):</b>
                        <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
                </ul>
                <p>
                        <label for="name">Name:</label>
                        <input id="name" v-model="name">
                </p>

                <p>
                        <label for="review">Review:</label>
                        <textarea id="review" v-model="review"></textarea>
                </p>

                <p>
                        <label for="rating">Rating:</label>
                        <select id="rating" v-model.number="rating">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                        </select>
                </p>

                <p>
                        <input type="submit" value="Submit">
                </p>

        </form>
</template>

<script>
        import {
                mapMutations,
                mapGetters
        } from 'vuex'

        export default {
                computed: {
                        name: {
                                get() {
                                        return this.$store.getters.name
                                },
                                set( value ) {
                                        this.$store.commit( 'updateName', value )
                                }
                        },
                        review: {
                                get() {
                                        return this.$store.getters.review
                                },
                                set( value ) {
                                        this.$store.commit( 'updateReview', value )
                                }
                        },
                        rating: {
                                get() {
                                        return this.$store.getters.rating
                                },
                                set( value ) {
                                        this.$store.commit( 'updateRating', value )
                                }
                        },
                        ...mapGetters(
                                [
                                        'errors',
                                        'reviews'
                                ] )
                },
                methods:{
                        ...mapMutations( [
                               'submitted',
                               'updateName',
                               'updateReview',
                               'updateRating'
                       ] )
                }
        }
</script>

<style scoped>
        .review-form {
                width: 400px;
                padding: 20px;
                margin: 40px;
                border: 1px solid #d8d8d8;
        }

        input {
                width: 100%;
                height: 25px;
                margin-bottom: 20px;
        }

        textarea {
                width: 100%;
                height: 60px;
        }

</style>