<script>
import { store } from './assets/data/Store';
import axios from '../node_modules/axios';

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main,


  },
  data(){
    return{
      axios,
      store
    }
  },
  methods: {
    getApi(){
      if(store.filterBy === 'all'){
        store.apiUrl = store.apiUrlSearchAll
      }else if(store.filterBy === 'movie'){
        store.apiUrl = store.apiUrlSearchMovie
      }else if(store.filterBy === 'tv'){
        store.apiUrl = store.apiUrlSearchTV
      }else {
        store.apiUrl = store.apiUrlPopular
      }

      axios.get(store.apiUrl, {
        params:{
          query: store.searchedMovies,
          page: store.counter
        }
      })
        .then(result => {
          store.popularMovies = result.data.results
          
          console.log(store.popularMovies);
          
          
        })
        store.searchedMovies = '';
        store.filterBy = ''
    }
  },
  mounted(){

  }
}
</script>

<template>
  <Header @startSearch="this.getApi" />
  
  <Main @getApi="this.getApi" />
  <Footer/>
</template>

<style lang="scss">
@import './scss/main.scss';
@import 'bootstrap/scss/bootstrap';


</style>