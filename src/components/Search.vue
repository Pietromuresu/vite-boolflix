<script>
import {store} from '../assets/data/Store';
export default {
  name: 'Search', 
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <label for="searchBar">
      <input
        @keyup.enter="$emit('startSearch')"
        v-model="store.searchedMovies"
        type="text"
        placeholder="Cerca un film">
      

      <select class="mx-3" v-model="store.filterBy" name="filterBy" >
        <option value="all">All</option>
        <option value="tv">Series</option>
        <option value="movie">Movie</option>
      </select>
      <button @click="$emit('startSearch')" >
        Invio
      </button>
    </label>

  </div>
</template>

<style lang="scss" scoped>

</style>