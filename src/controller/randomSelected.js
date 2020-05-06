(async function randomSelected(){
 
  // USE API
      async function getData(url){
          const response = await fetch(url)
          const data = await response.json()
          return data;
      }
  //-----------genre filter YTSI (funcion para buscar por genero)
  const BASE_API = 'https://yts.mx/api/v2/list_movies.json';
  async function selectGenre(userSelection){
     
      const moviesByGenres = await getData(`${BASE_API}?genre=${userSelection}&sort_by=rating`);  
      const movieDataByGenre =moviesByGenres.data.movies;
      const idForGenre  = movieDataByGenre.map(singleMovie =>{
          return singleMovie.imdb_code;
      });
      idForGenre .map(async id => {
          const API_KEY = 'ea0e8d2f';
          const infoMoviesByGenre = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  
      const resultDataGenre ={
          title: infoMoviesByGenre.Title,
          imgURL: infoMoviesByGenre.Poster,
          year: infoMoviesByGenre.Year,
          runtime: infoMoviesByGenre.Runtime,
          genre: infoMoviesByGenre.Genre,
          summary:infoMoviesByGenre.Plot,
          director: infoMoviesByGenre.Director,
          writer: infoMoviesByGenre.Writer,
          actors : infoMoviesByGenre.Actors,
          language : infoMoviesByGenre.Language,
          country: infoMoviesByGenre.Country,
          imdbRating: infoMoviesByGenre.imdbRating,
          type: infoMoviesByGenre.Type,
      }
      console.log(resultDataGenre);
     })
  }
  // RANDOM  suggestion
  const GENRES = [ 'action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 'horror', 'musical', 'music', 'mystery', 'news', 'romance', 'sport', 'thriller', 'war' ];
  
  const randomNumber = Math.floor((Math.random() * GENRES.length - 1 ) + 1  );
  const randomGenre= GENRES[randomNumber];
  const GENRE_SUGGEST = randomGenre;
  console.log(GENRE_SUGGEST)
  selectGenre(GENRE_SUGGEST);   // 1.sugerencia RANDOM
  
})()