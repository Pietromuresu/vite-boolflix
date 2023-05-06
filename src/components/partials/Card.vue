
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
  }
  },
  mounted(){
    this.isLangDefined()
    console.log(this.lang
    );
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
    <div class="col " >
      <div class="p-card mx-auto text-center">

        <p> {{ title }} </p>
        <p>{{ originalTitle }}</p>
        <p v-if="isDef"> Lang: <img  :src="`../../public/img/flags/language-${lang}.svg`" alt="">   </p>
        <p v-else><span >{{ lang }}</span></p>
        <p> Rates: {{ votes }}</p>  
        
      </div>
    </div>
      
  </template>

  <style lang="scss" scoped>
  .p-card{
      height: 300px;
      width: 250px;
    img{
      height: 16px;
    }
  }
  </style>