
<script>
export default {
name: 'Card',

  props:{
    title: String,
    originalTitle: String,
    lang: String,
    votes: String
  }
}
</script>

<template>
   <div class="p-card" >
      <h3>Title: {{ title }} </h3>
      <h5>Original Title: {{ originalTitle }}</h5>
      <h5>Language: {{ lang }}</h5>
      <h5>Votes:{{ votes }}</h5>
      <hr>
    </div>
</template>

<style lang="scss" scoped>

</style>