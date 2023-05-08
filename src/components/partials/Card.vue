
  <script>

  import {store} from '../../assets/data/Store'
  export default {
  name: 'Card',
  data(){
    return{
      store,
      isDef: true,
      isOnHover: false
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
      card: Object,
      backdrop: String,
      hovBackdrop: String,
      lang: String,
      stars: String,
      votes: String,
      description: String
    }
  }
  </script>

  <template>
    <div class="col " >
      <div class="pm-card mx-auto text-center" @mouseover="isOnHover = true" @mouseleave="isOnHover = false">

        <div :class="{'d-none' : isOnHover}" class="basic-card">

          <img class="poster" :src="backdrop" alt="">
          <p> {{ card.title || card.name }} </p>

        </div>
        
        
        <div :class="{ 'd-none' : !isOnHover }"  class="hover-card">

          <img class="" :src="hovBackdrop" alt="">
          <div class="desc-container text-center">

            <p> {{ card.title || card.name }} </p>
            <p>{{ card.original_title || card.original_name}}</p>
            <p v-if="isDef"> Lang: <img class="countryFlag" :src="`/img/flags/language-${lang}.svg`" alt="">   </p>
            <p v-else><span >{{ lang }}</span></p>
            <p class="desc" >{{ description }}</p>
            <p > Rates: <span>{{ votes }}</span></p>  
            <span>{{ stars }}</span>  
            
          </div>
        </div>

      </div>
    </div>
      
  </template>

  <style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;
  .pm-card{

      min-height: 200px;
      max-width: 400px;
      margin-bottom: 20px ;
      line-height: 16px;
      color: $text;
      .hover-card{
        text-align: center;

        img{
          max-width: 250px
        }
      }
      .poster{
        max-width: 92px;
      }
    .countryFlag{
      height: 16px;
    }

    .desc{
      display: block;
      height: 100px;
      width: 100%;
      overflow: auto;

      }
  }
  </style>