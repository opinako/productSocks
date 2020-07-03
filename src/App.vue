<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> | -->
    <Product />

  </div>
</template>

<script>
  import Product from './components/Product'

  export default {
    components: {
      Product
    }
  }
</script>

<style>
  .nav {
    padding: 30px;
  }

  .nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  .nav a.router-link-exact-active {
    color: #42b983;
  }

  body {
    font-family: tahoma;
    color: #282828;
    margin: 0px;
  }

  .tab {
    margin-left: 20px;
    cursor: pointer;
  }

  .activeTab {
    color: #16C0B0;
    text-decoration: underline;
  }

  .flex {
    display: flex;
  }
</style>