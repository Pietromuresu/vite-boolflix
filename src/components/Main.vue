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
  <div class="container mx-auto row mt-5 ">
    <Card
      
      v-for="movie in store.popularMovies"
      :key="movie.id"
      :backdrop="`https://image.tmdb.org/t/p/w92${movie.poster_path}`"
      :lang="movie.original_language"
      :originalTitle="getRightOriginalName(movie)"
      :title="getRightName(movie)"
      :votes="movie.vote_average" />
    
   
  </div>
</template>

<style lang="scss" scoped>

</style>