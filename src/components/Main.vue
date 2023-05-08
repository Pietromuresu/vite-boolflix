<script>
import {store} from '../assets/data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from './partials/Card.vue';
import pmJumbotron from './partials/Jumbotron.vue'
import CardSlider from './partials/CardSlider.vue'
import containerSearchedTitles from './partials/containerSearchedTitles.vue';


export default {
  name: 'Main', 
  components: {
    Card,
    pmJumbotron,
    Swiper,
    SwiperSlide,
    CardSlider,
    containerSearchedTitles
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
    <!-- Home -->
    <div class="home" v-if="store.isInHome">

      <!-- Jumbotron -->
      <h1 class="ms-5 my-3">Top 3</h1>
      <div  class="container-home mx-5 row">
        <pmJumbotron/>
      </div>
      
      
      <!-- Popular Movies -->
      <h1 class="ms-5 my-3">Popular Movies</h1>
      <div  class="container-home mx-5  row">
        <CardSlider :where="store.popularMovies"/>
      </div>
      
      <!-- Popular Series -->
      <h1 class="ms-5 mb-5">Popular Series </h1>
      <div  class="container-home mx-5  row">
        <CardSlider :where="store.popularSeries"/>  
      </div>

    </div>
    
    <!-- Searched Titles -->
    <div v-else class="container-searched mx-5 pt-5 ">
      <containerSearchedTitles @getApi="$emit('getApi')"/>
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


  .container-home{
    flex-wrap: nowrap !important;
    
    .slide{
      
      h3{
        color: rgb(183, 183, 183);
      }
      img{
        z-index: 0;
        height: 50vh;
      }
    }
  }

  .swiperpm{
    &:hover{
      z-index: 10;
    }
  }


}   

</style>