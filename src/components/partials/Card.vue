
<script>


export default {
name: 'Card',
components:{

},
mounted(){
},

props:{
    title: String,
    originalTitle: String,
    lang: String,
    votes: Number
  }
}
</script>

<template>
   <div class="p-card" >
      <h3>Title: {{ title }} </h3>
      <h5>Original Title:{{ originalTitle }}</h5>
      <h5> Language: <img :src="lang" alt="">  </h5>
      <h5>Votes:{{ votes }}</h5>
      
      <hr>
    </div>
    
</template>

<style lang="scss" scoped>
  img{
    height: 16px;
  }
</style>