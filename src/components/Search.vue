<script>
import {store} from '../assets/data/store';
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
      <button @click="$emit('startSearch')" >
        Invio
      </button>
    </label>
  </div>
</template>

<style lang="scss" scoped>

</style>