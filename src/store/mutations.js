import router from '../router/index'

export default {
    updateProduct(getters,index){
        getters.selectedVariant = index;
    },
    updateCart (getters)
    {
        getters.cart.push(getters.variants[getters.selectedVariant].variantId)
    },
    zeroCart (getters)
    {
        getters.cart = []
    },
    submitted (getters)
    {
        getters.errors = []
        if ( getters.name && getters.review && getters.rating )
        {
             let productReviews = {
                name: getters.name,
                review: getters.review,
                rating:getters.rating
             }
            getters.reviews.push(productReviews)
            getters.name = null,
            getters.review = null,
                getters.rating = null,
            router.push('/reviews')
            
        } else
        {
            if(!getters.name)getters.errors.push('Name required.')
            if(!getters.review)getters.errors.push('Review required.')
            if(!getters.rating)getters.errors.push('Rating required.')
        }
    },
    updateName( getters, name) {
        getters.name = name
    },
    updateReview( getters, review) {
        getters.review = review
    },
    updateRating( getters, rating) {
        getters.rating = rating
    }
}