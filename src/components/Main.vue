<script>
import {store} from '../assets/data/Store';
import Card from './partials/Card.vue';



export default {
  name: 'Main', 
  components: {
    Card
  },
  data(){
    return{
      store,
      title: '',
      originalTitle: '',

      
    }
  },
  methods: {
 getRightName(movie) { 
      if(movie.title) {
         this.title = movie.title
      }else {  
          this.title = movie.name
      }
      return this.title
    },

 getRightOriginalName(movie) { 
      if(movie.original_title) {
         this.originalTitle = movie.original_title
      }else {  
          this.originalTitle = movie.original_name
      }
      return this.originalTitle
    },  

    getImage(movie){
      if(!movie.poster_path){
        return `/img/not-available-clipart-12.jpeg`
      }else {
        return `https://image.tmdb.org/t/p/w92${movie.poster_path}`
      }
    },

    getStars(movie){
    store.stars = Math.ceil(movie.vote_average / 2)

    for(let i = 0; i < store.stars ; i++){
      store.starred += '★'
      
    } 
    console.log(store.starred)

      return store.starred
    },

    cleanStars(){
      store.starred = ''
    }
  },
  mounted(){

  }




}
</script>

<template>
  <main>

    <div class="container mx-auto row pt-5 ">
      <Card
      
      v-for="movie in store.popularMovies"
      :key="movie.id"
      :backdrop="getImage(movie)"
      :lang="movie.original_language"
      :originalTitle="getRightOriginalName(movie)"
      :title="getRightName(movie)"
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
  min-height: calc(100vh - 80px);
  padding-top: 80px;

  .container{
    color: white;
  }
}   

</style>