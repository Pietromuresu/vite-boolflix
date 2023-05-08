<script>
import { store } from '../assets/data/store';
import Search from './Search.vue'
export default {
  name: 'Header', 

  components:{
    Search,
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
<header class="pm-header-container px-5 ">
  <div class=" h-100 d-flex justify-content-between  align-items-center">
    <div class="logo-container">
      <img @click=" store.counter = 1, $emit('getApi')" src="../../public/img/logo-boolflix.png" alt="">
    </div>
    
    <Search @callStartSearch="$emit('startSearch')"/>
  </div>
</header>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;
  .pm-header-container{
    height: 80px;
    position: fixed;
    width: 100%;
    background-color: $header-bg;
    box-shadow: 0 0 5px black;
    z-index: 10 !important;
    .logo-container{

      img{
        height: 40px;
      }
    }
  }
</style>