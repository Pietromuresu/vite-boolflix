import {reactive} from 'vue';

export const store = reactive({
  apiUrl: '',
  apiUrlPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=5e40c009cf86288c68613008991a2169&language=en-US&page=1',
  apiUrlSearchAll: 'https://api.themoviedb.org/3/search/multi?api_key=5e40c009cf86288c68613008991a2169',
  apiUrlSearchTV: 'https://api.themoviedb.org/3/search/tv?api_key=5e40c009cf86288c68613008991a2169',
  apiUrlSearchMovie: 'https://api.themoviedb.org/3/search/movie?api_key=5e40c009cf86288c68613008991a2169',
  popularMovies: [],

  searchedMovies: [],
  counter: 1,
  filterBy: ''
})