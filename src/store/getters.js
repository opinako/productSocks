export default {
    image (state)
    {
        return state.variants[state.selectedVariant].variantImage
    },
    shipping (state)
    {
        if ( state.premium )
        {
            return 'Free'
        } else
        {
            return 2.99
        }
    },
    inStock (state)
    {
       return state.variants[state.selectedVariant].variantQuantity
    },
    details (state)
    {
        return state.details
    },
    variants ( state )
    {
        return state.variants
    },
    selectedVariant (state)
    {
        return state.selectedVariant
    },
    cart (state)
    {
        return state.cart
    },
    product (state)
    {
        return state.product
    },
    premium (state)
    {
        return state.premium
    },
    name (state)
    {
        return state.name
    },
    review (state)
    {
        return state.review
    },
    rating (state)
    {
        return state.rating
    },
    errors (state)
    {
        return state.errors
    },
    reviews (state)
    {
        return state.reviews
    }
    
}