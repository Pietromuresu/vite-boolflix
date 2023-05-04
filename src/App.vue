<script>
import { store } from './assets/data/Store';
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
      axios,
      store
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrlSearch, {
        params:{
          query: store.searchedMovies,
          page: store.counter
        }
      })
        .then(result => {
          store.popularMovies = result.data.results
          console.log(store.popularMovies);
        })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
  <Header/>
  <Search @startSearch="this.getApi"/>
  <Main />
  <Footer/>
</template>

<style lang="scss">
@import './scss/main.scss';
@import 'bootstrap/scss/bootstrap';


</style>