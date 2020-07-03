<template>
    <div>
        <p>{{ shipping }}</p>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            name:'Shipping'
        }
    },
    computed:{
        ...mapGetters([
            'shipping'
        ])
    }
}
</script>

