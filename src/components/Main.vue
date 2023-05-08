<script>
import {store} from '../assets/data/store';
import Card from './partials/Card.vue';
import pmJumbotron from './partials/Jumbotron.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';


export default {
  name: 'Main', 
  components: {
    Card,
    pmJumbotron,
    Swiper,
    SwiperSlide
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
    <div v-if="store.isInHome" class="container-home mx-5 row">
      <Swiper
      :slides-per-view="1.5"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >

        <swiper-slide class="slide position-relative d-flex align-items-end " v-for="movie in store.popularMovies"
        :key="movie.id">
        
        <img :src="getImage(movie, 'poster', movie.backdrop_path)" alt="">
        <h3 class="position-absolute ms-3 "> {{ movie.title  }}</h3>
        </swiper-slide>
        
      </Swiper>
    </div>
      
    
    <h1 class="ms-5 mb-3">Popular Series</h1>
    <div v-if="store.isInHome" class="container-home mx-5  row">
      <Swiper
      :slides-per-view="8"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      
      >
        <swiper-slide class="swiperpm" v-for="movie in store.popularSeries"
      :key="movie.id">

          <Card
          
          
          :card="movie"
          :backdrop="getImage(movie, '', movie.poster_path)"
          :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
          :lang="movie.original_language"
          :description="movie.overview"
          :votes="getStars(movie)"
          :stars="cleanStars()"
          />  
        </swiper-slide>
      </Swiper>
      
    </div>
    
    <h1 class="ms-5 mb-3">Popular Movies</h1>
    <div v-if="store.isInHome" class="container-home mx-5  row">
      
      <Swiper
      :slides-per-view="8"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      
      >
        <swiper-slide class="swiperpm" v-for="movie in store.popularMovies"
      :key="movie.id">

          <Card
          
          
          :card="movie"
          :backdrop="getImage(movie, '', movie.poster_path)"
          :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
          :lang="movie.original_language"
          :description="movie.overview"
          :votes="getStars(movie)"
          :stars="cleanStars()"
          />  
        </swiper-slide>
      </Swiper>
      
      
    </div>
    
    <div v-else class="container-searched mx-5 row pt-5 ">
      
      <Card
      v-for="movie in store.popularMovies"
      :key="movie.id"
      
      :card="movie"
      :backdrop="getImage(movie, '', movie.poster_path)"
      :hovBackdrop="getImage(movie, 'poster', movie.backdrop_path)"
      :lang="movie.original_language"
      :description="movie.overview"
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