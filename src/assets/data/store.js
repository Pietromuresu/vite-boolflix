import {reactive} from 'vue';

export const store = reactive({
  apiUrlPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=5e40c009cf86288c68613008991a2169&language=en-US&page=1',
  popularMovies: [],

  apiUrlSearch: 'https://api.themoviedb.org/3/search/movie?api_key=5e40c009cf86288c68613008991a2169',
  searchedMovies: '',
  counter: 1 
})