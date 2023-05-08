<script>
import {store} from '../assets/data/store';
import Card from './partials/Card.vue';
import pmJumbotron from './partials/Jumbotron.vue'



export default {
  name: 'Main', 
  components: {
    Card,
    pmJumbotron
  },
  data(){
    return{
      store,
      title: '',
      originalTitle: '',

      
    }
  },
  methods: {
 

    getImage(movie, img, frontBack){
      if(!frontBack){
        return `/img/not-available-clipart-12.jpeg`
      }else if(img === ''){
        return `https://image.tmdb.org/t/p/w92${movie.poster_path}`
      }else if(img === 'poster'){
        return `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`

      }
    },

    getStars(movie){
    store.stars = Math.ceil(movie.vote_average / 2)

    for(let i = 0; i < store.stars ; i++){
      store.starred += '★'
      
    } 

      return store.starred
    },

    cleanStars(){
      store.starred = ''
    }
  },
  mounted(){
    this.$emit('getMovies')
    this.$emit('getSeries')
  }




}
</script>

<template>

  <main>
    <div v-if="store.isInHome" class="container-home mx-5  row">

      <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '', movie.poster_path)"
      :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
      :lang="movie.original_language"
      :description="movie.overview !== '' || 'no desc'"
      :votes="getStars(movie)"
      :stars="cleanStars()"
      />  
      
    </div>
    <h1 class="ms-5 mb-3">Popular Series</h1>
    <div v-if="store.isInHome" class="container-home mx-5  row">
      <Card
      v-for="movie in store.popularSeries"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '', movie.poster_path)"
      :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
      :lang="movie.original_language"
      :description="movie.overview"
      :votes="getStars(movie)"
      :stars="cleanStars()"
      />  
      
    </div>
    
    <h1 class="ms-5 mb-3">Popular Movies</h1>
    <div v-if="store.isInHome" class="container-home mx-5  row">
      
      <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '', movie.poster_path)"
      :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
      :lang="movie.original_language"
      :description="movie.overview"
      :votes="getStars(movie)"
      :stars="cleanStars()"
      />  
      
    </div>
    
    <div v-else class="container-searched mx-5 row pt-5 ">
      
      <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '', movie.poster_path)"
      :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
      :lang="movie.original_language"
      :description="movie.overview"
      :votes="getStars(movie)"
      :stars="cleanStars()"
      /> 

    </div>
  </main>

</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
main{
  background-color: $card-container-bg;
  min-height: 100vh;
  padding-top: 130px;
  color: white;

  .container-searched,
  .container-home{
    flex-wrap: nowrap !important;
  }

}   

</style>