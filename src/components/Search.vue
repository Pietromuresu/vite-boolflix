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
  <div class="container-search-bar ">
    <label for="searchBar">
      <input
        
        @keyup.enter="store.counter= 1, $emit('callStartSearch'), store.isInHome = false"
        v-model="store.searchedMovies"
        type="text"
        placeholder="Cerca un film">
      

      <select class="mx-3" v-model="store.filterBy" name="filterBy" >
        <option value="" selected>All</option>
        <option value="tv">Series</option>
        <option value="movie">Movie</option>
      </select>
      <div class="btn" @click="store.counter= 1, $emit('callStartSearch')" >
        <i class="fa-solid fa-magnifying-glass"> </i>
      </div>
    </label>

  </div>
</template>

<style lang="scss" scoped>
  .container-search-bar{

    input,
    select{
      border-radius: 10px;
      border: 1px solid grey;
      padding: 5px;
      background-color: rgb(179, 179, 179);
    }

    .btn{
      font-size: 20px;
      color: white;
      padding: 2px 10px;
      font-weight: bold;

    }
  }
</style>