
<script>
import {store} from '../../assets/data/store';
import Card from './Card.vue'
export default {
  name: 'Jumbotron',
  components:{
    Card
  },
  data(){
    return {
      store
      
    }
  },
  methods:{
    getApi(){
      this.$emit('getApiR')
    }
  },

  mounted() {

    this.getApi()
  }

}
</script>

<template>
  <div class="pm-jumbotron">
    <Card
      
      v-for="movie in store.popularMovies"
      :key="movie.id"
      :backdrop="$emit('getImage')"
      :lang="movie.original_language"
      :originalTitle="$emit('getRightOriginalName')"
      :title="$emit('getRightName')"
      :votes="$emit('getStars')"
      :stars=" $emit('cleanStars')"
      />  
    </div>

</template>

<style lang="scss" scoped>

</style>