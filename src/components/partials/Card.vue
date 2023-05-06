
  <script>


  export default {
  name: 'Card',
  data(){
    return{
      isDef: true
    }
  },
  components:{

  },
  methods: {
  isLangDefined(){
  if(this.lang === 'xx'){
    this.isDef = false
  }else{
    this.isDef = true
  }
  },

  
  },
  mounted(){
    this.isLangDefined()

  },

  props:{
      backdrop: String,
      title: String,
      originalTitle: String,
      lang: String,
      votes: Number
    }
  }
  </script>

  <template>
    <div class="col " >
      <div class="p-card mx-auto text-center">
        <img class="poster" :src="backdrop" alt="">
        <p> {{ title }} </p>
        <p>{{ originalTitle }}</p>
        <p v-if="isDef"> Lang: <img class="countryFlag" :src="`/img/flags/language-${lang}.svg`" alt="">   </p>
        <p v-else><span >{{ lang }}</span></p>
        <p> Rates: {{ votes }}</p>  
        
      </div>
    </div>
      
  </template>

  <style lang="scss" scoped>
  .p-card{

      height: 300px;
      width: 250px;
      margin-bottom: 20px ;
      line-height: 16px;
      .poster{
        max-width: 92px;
      }
    .countryFlag{
      height: 16px;
    }
  }
  </style>