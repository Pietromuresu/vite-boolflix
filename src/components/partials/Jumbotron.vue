
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {store} from '../../assets/data/store';
import Card from './Card.vue'
export default {
  name: 'Jumbotron',
  components:{
    Card,
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      store,
      bestThree: []
      
    }
  },
  methods:{
    getApi(){
      this.$emit('getApiR')
    },
    getImage(movie, img, frontBack){
      if(!frontBack){
        return `/img/not-available-clipart-12.jpeg`
      }else if(img === ''){
        return `https://image.tmdb.org/t/p/w92${movie.poster_path}`
      }else if(img === 'poster'){
        return `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`

      }
    },

    higherVotes(){
      this.bestThree = [...store.popularMovies]

      
      this.bestThree.sort(function(a, b) {
        return (a === b)? 0 : a ? +1 : -1;
      })
      
      console.log(this.bestThree.slice(0, 3));
      return this.bestThree.slice(0, 3)
      
    } 
  },

  mounted() {
    this.higherVotes()
    this.getApi()
  }

}
</script>

<template>
   <div class="pm-jumbotron">

    <Swiper
      :slides-per-view="1.5"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
      
        <swiper-slide class="slide position-relative d-flex align-items-center " v-for="movie in higherVotes()"
        :key="movie.id">
        
        <img :src="getImage(movie, 'poster', movie.backdrop_path)" alt="">
        <div class="position-absolute ms-3 container-desc">
          <h3 class="ms-3 "> {{ movie.title  }}</h3>
          <p>{{ movie.overview }}</p>
          <p>{{ movie.votes_average }}</p>
        </div>
      </swiper-slide>
    
    </Swiper>
</div>

</template>

<style lang="scss" scoped>
 .pm-jumbotron{
    flex-wrap: nowrap !important;
    
    .slide{
      
      h3{
        color: white;
      }
      img{
        z-index: 0;
        height: 50vh;

        &:hover{
          filter:opacity(80%);
        }
      }
    }
    
    .container-desc{
      color: white;
      width: 50%;
    }
  }




</style>