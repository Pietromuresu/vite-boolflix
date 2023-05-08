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
 

    getImage(movie, img){
      if(!movie.poster_path){
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
    this.$emit('getApi')
  }




}
</script>

<template>

  <main>
    <div v-if="store.isInHome" class="container-home row">

      <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '')"
      :hovBackdrop="getImage(movie, 'poster')"
      :lang="movie.original_language"
      :description="movie.overview"
      :votes="getStars(movie)"
      :stars="cleanStars()"
      />  

    </div>

    <div v-else class="container mx-auto row pt-5 ">

      <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '')"
      :hovBackdrop="getImage(movie, 'poster')"
      :lang="movie.original_language"
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

  .container, 
  .container-home{
    color: white;

    
  }
}   

</style>