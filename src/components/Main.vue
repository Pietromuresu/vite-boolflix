<script>
import {store} from '../assets/data/Store';
import Card from './partials/card.vue';
export default {
  name: 'Main', 
  components: {
    Card
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="pm-card-container">
    <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      :lang="movie.original_language"
      :originalTitle="movie.title"
      :title="movie.original_title"
      :votes="movie.vote_average" />
   
  </div>
</template>

<style lang="scss" scoped>

</style>