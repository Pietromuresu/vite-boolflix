
<script>
import Card from './Card.vue'
import {store} from '../../assets/data/store'
export default {
  components:{
    Card
  },
  data(){
    return{
      store
    }
  },
  methods:{

    getImage(movie, img, frontBack){
      if(!frontBack){
        return `/img/not-available-clipart-12.jpeg`
      }else if(img === ''){
        return `https://image.tmdb.org/t/p/w92${movie.poster_path}`
      }else if(img === 'poster'){
        return `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`

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
    },

    nextPrev(plusMinus){
      if(plusMinus = 'next' ){
        store.counter ++
      }else if(plusMinus = 'prev' && store.counter !== 1 ) {
        store.counter --
      }
      console.log(store.counter);
    }
  }
}
</script>
<template>
  <div v-if="store.searchedTitles.length == 0">
    <h1>Non ci sono risultati per questa ricerca</h1>
  </div>
  
  <div v-else class="row ">

    <Card class="col-2"
    v-for="movie in store.searchedTitles"
    :key="movie.id"
    
    :card="movie"
    :backdrop="getImage(movie, '', movie.poster_path)"
    :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
    :lang="movie.original_language"
    :description="movie.overview"
    :votes="getStars(movie)"
    :stars="cleanStars()"
    /> 

    <div class="nextPrevContainer" >
      <div :class="{'d-none' : store.counter === 1}" @click="nextPrev('prev'), $emit('getApi')" class="btn me-3">Prev</div>
      <div class="btn me-3" :class="{'d-none' : store.counter <= 1}" @click="store.counter = 1, $emit('getApi')" >Back to page 1</div>
      <div @click="nextPrev('next'), $emit('getApi')" class="btn">Next</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.nextPrevContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  .btn{
    background-color: grey;
    color: white;
  }
}

</style>