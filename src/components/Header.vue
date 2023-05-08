<script>
import Search from './Search.vue'
export default {
  name: 'Header', 

  components:{
    Search,

  }
}
</script>

<template>
<header class="pm-header-container px-5 ">
  <div class=" h-100 d-flex justify-content-between  align-items-center">
    <div class="logo-container">
      <img @click="$emit('getApi')" src="../../public/img/logo-boolflix.png" alt="">
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
    .logo-container{

      img{
        height: 40px;
      }
    }
  }
</style>