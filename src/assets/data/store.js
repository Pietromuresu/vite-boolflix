import {reactive} from 'vue';

export const store = reactive({
  apiUrl: '',
  apiUrlMoviePopular: 'https://api.themoviedb.org/3/movie/popular?api_key=5e40c009cf86288c68613008991a2169',
  apiUrlTvPopular: 'https://api.themoviedb.org/3/tv/popular?api_key=5e40c009cf86288c68613008991a2169',
  apiUrlSearchAll: 'https://api.themoviedb.org/3/search/multi?api_key=5e40c009cf86288c68613008991a2169',
  apiUrlSearchTV: 'https://api.themoviedb.org/3/search/tv?api_key=5e40c009cf86288c68613008991a2169',
  apiUrlSearchMovie: 'https://api.themoviedb.org/3/search/movie?api_key=5e40c009cf86288c68613008991a2169',
  popularMovies: [],
  popularSeries: [],
  searchedTitles: [],

  searchedMovies: '',
  counter: 1,
  lastPage: '',
  filterBy: '',
  stars: 0,
  starred: '',
  isInHome: true
})