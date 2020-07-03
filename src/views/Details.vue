<template>
    <ul>
        <li v-for="(detail,index) in details" :key="index">{{ detail }}</li>        
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'details'
        ])
    }
}
</script>

<style>

</style>