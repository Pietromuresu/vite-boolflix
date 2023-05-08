<script>
import { store } from './assets/data/Store';
import axios from '../node_modules/axios';

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,


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
      }else if (type === 'popularMovies'){
        store.apiUrl = store.apiUrlMoviePopular
      }else if(type === 'popularSeries'){
        store.apiUrl = store.apiUrlTvPopular
        
      }
      console.log((type));

      axios.get(store.apiUrl, {
        params:{
          query: store.searchedMovies ,
          language: 'it',
          page: store.counter
        }
      })
        .then(result => {
          if(store.searchedMovies){
            store.searchedTitles = result.data.results
          }else if(store.searchedMovies == ''){
            store.searchedTitles = []
          }
          
          if(type == 'popularSeries'){
            store.popularSeries = result.data.results   

          }else if(type == 'popularMovies'){
            store.popularMovies = result.data.results   

          }
          console.log(store.popularMovies, store.popularSeries);
          
        })
    }
  },
  mounted(){

  }
}
</script>

<template>
  <Header
    @getApi="this.getApi('popularMovies'), store.searchedMovies= '', store.filterBy='', store.isInHome = true, store.searchedTitles= []"
    @startSearch="this.getApi(store.filterBy)"/>
  <Home
    @getMovies="this.getApi('popularMovies')"
    @getSeries="this.getApi('popularSeries')" 
    @getApi="this.getApi(store.filterBy)"
    />
    
    
  <Footer/>
</template>

<style lang="scss">
@import './scss/main.scss';
@import 'bootstrap/scss/bootstrap';


</style>