<script>
import axios from '../node_modules/axios';

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
import Search from './components/Search.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main,
    Search
  },
  data(){
    return{
      axios
    }
  }
}
</script>

<template>
  <Header/>
  <Search/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
@import './scss/main.scss';
@import 'bootstrap/scss/bootstrap';


</style>