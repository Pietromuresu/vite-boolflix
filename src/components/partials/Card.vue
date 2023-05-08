
  <script>

  import {store} from '../../assets/data/Store'
  export default {
  name: 'Card',
  data(){
    return{
      store,
      isDef: true,
      isActive: false
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
    <div class="col-1 " >
      <div class="pm-card mx-auto text-center"  >

        <div  class="basic-card">

          <img class="poster" :src="backdrop" alt="">
          <p> {{ card.title || card.name }} </p>

        </div>
        
        
        <div  class="hover-card ">

          <img class="" :src="hovBackdrop" alt="">
          <div class="container-btn-drop d-flex pb-2 mt-2 px-4 justify-content-between" >
            <p> {{ card.title || card.name }} </p>
            <div class="pm-dropdown" @click="isActive = !isActive"><i class="fa-solid fa-chevron-down"></i></div>
          </div>

          <div :class="{'active d-block ' : isActive}" class="desc-container text-center p-3 ">

            <p>Original Name: {{ card.original_title || card.original_name}}</p>
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
   
      margin-bottom: 20px ;
      line-height: 16px;
      color: $text;
      

      &:hover{
        transform: scale(1.1);

        
        transition: 1s;
        .basic-card{
          display: none;
        }

        .hover-card{
          display: block;
        }
        .desc-container{
          width: 280px;
        }
      }

      .basic-card{
        p{

              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              height: 20px;
            }
      }

      .hover-card{
        transform: scale(.9);
        text-align: center;
        display: none;
        transition: 1s;
        overflow: hidden;
        width: 300px;
        background-color: $card-container-bg;
        border-radius: 20px;
        
        box-shadow: 0 0 5px black;
        
        img{
          width: 100%;

        }

        .container-btn-drop{

          .pm-dropdown{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 30px;
            padding: 5px;
            border-radius: 50%;
            border: 1px solid white;
            font-size: small;
          }
        }
      }
      .poster{
        max-width: 92px;
      }
      .countryFlag{
        height: 16px;
      }
      
      .desc-container{
        display: none;
        
      .desc{
        display: block;
        height: 100px;
        width: 100%;
        overflow: auto;
        


      }
    }
  }

  .active{

    transform: scaleY(1.01);
  }
  </style>