
async function genreSelected(userSelection){
  // USE API
      async function getData(url){
          const response = await fetch(url)
          const data = await response.json()
          return data;
      }
  //-----------genre filter YTSI (funcion para buscar por genero)
      const BASE_API = 'https://yts.mx/api/v2/list_movies.json';
      const moviesByGenres = await getData(`${BASE_API}?genre=${userSelection}&sort_by=rating`);  
      const movieDataByGenre =moviesByGenres.data.movies;
      console.log(movieDataByGenre)

      const idForGenre  = movieDataByGenre.map(singleMovie =>{
          return singleMovie.imdb_code;
      });
      idForGenre .map(async id => {
          const API_KEY = 'ea0e8d2f';
          const infoMoviesByGenre = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  console.log(infoMoviesByGenre)

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

genreSelected('action');

