
<script>
import {store} from '../../assets/data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Card from './Card.vue'
export default {
  name: 'PopularMovies',
  components:{
    Card,
        Swiper,
    SwiperSlide
  },
  data(){
    return {
      store,
      
    }
  },
  props:{
    where: String
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
    }

  }
}
</script>

<template>

      <Swiper
      :slides-per-view="8"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      
      >
        <swiper-slide class="swiperpm" v-for="movie in where"
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

</template>

<style lang="scss" scoped>
   .slide{
      
      h3{
        color: rgb(183, 183, 183);
      }
      img{
        z-index: 0;
        height: 50vh;
      }
    }
  

  .swiperpm{
    &:hover{
      z-index: 10;
    }
  }


</style>