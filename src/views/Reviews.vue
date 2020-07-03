<template>
  <div>
     <p v-if="!reviews.length">There are no reviews yet.</p>
     <ul v-else>
       <li v-for="(review,index) in reviews" :key="index">
         <p>{{ review.name}}</p>
         <p>{{ review.review}}</p>
         <p>Rating:{{ review.rating}}</p>
       </li>
     </ul>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'reviews'
    ])
  }
}
</script>

