<template>
  <div>
    <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart:({{ cart.length }})</p>
    </div>

    <div class="product">
      <div class="product-image">
        <img :src="image" alt="靴下">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inStock">in Stock</p>
        <p v-else>Out of Stock</p>

      <ProductRouter />
        <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{ backgroundColor:variant.variantColor }" @mouseover="updateProduct(index)"></div>

        <div class="flex">
          <button @click="updateCart" :class="{disabledButton:!inStock}" :disabled="!inStock">Add to Cart</button>
          <button @click="zeroCart">Cancel from Cart</button>

        </div>

      </div>

    </div>


  </div>
</template>

<script>
  import ProductRouter from './ProductRouter'
  import {
    mapGetters
  } from 'vuex'

  export default {
    components: {
      ProductRouter
    },
    computed: {
      ...mapGetters( [
        'cart',
        'product',
        'premium',
        'image',
        'variants',
        'selectedVariant',
        'inStock'
      ] )
    },
    methods: {
      updateProduct( index ) {
        this.$store.commit( 'updateProduct', index )
      },
      updateCart() {
        this.$store.commit( 'updateCart', )
      },
      zeroCart() {
        this.$store.commit( 'zeroCart' )
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 60px;
    margin-bottom: 15px;
  }

  .product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }

  .product-image {
    width: 80%;
  }

  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
  }

  .color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }

  .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }

  button {
    margin-top: 30px;
    border: none;
    background-color: #1E95EA;
    color: white;
    height: 40px;
    width: 100px;
    font-size: 14px;
    margin-right: 20px;
    border-radius: 20%;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }


  .disabledButton {
    background-color: #d8d8d8;
  }
</style>