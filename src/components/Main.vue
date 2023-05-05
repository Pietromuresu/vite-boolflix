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
      originalTitle: ''
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
    }
  },

}
</script>

<template>
  <div class="pm-card-container">
    <Card
      
      v-for="movie in store.popularMovies"
      :key="movie.id"
      :lang="`../../public/img/flags/language-${movie.original_language}.svg`"
      :originalTitle="getRightOriginalName(movie)"
      :title="getRightName(movie)"
      :votes="movie.vote_average" />
    
   
  </div>
</template>

<style lang="scss" scoped>

</style>