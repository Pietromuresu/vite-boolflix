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
    getApi(type){
      
      if(type === ''){
        store.apiUrl = store.apiUrlSearchAll
      }else if(type === 'movie'){
        store.apiUrl = store.apiUrlSearchMovie
      }else if(type === 'tv'){
        store.apiUrl = store.apiUrlSearchTV
      }else if (type === 'popular'){
        store.apiUrl = store.apiUrlPopular
      }
      console.log((type));

      axios.get(store.apiUrl, {
        params:{
          query: store.searchedMovies,
          language: 'it-IT',
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

  }
}
</script>

<template>
  <Header @getApi="this.getApi('popular'), store.searchedMovies= '', store.filterBy=''"  @startSearch="this.getApi(store.filterBy)" />
  <Main @getApi="this.getApi('popular')" />
  <Footer/>
</template>

<style lang="scss">
@import './scss/main.scss';
@import 'bootstrap/scss/bootstrap';


</style>