//Search by Name Function
async function searchTitleMovie(searchTitle){

  //Get data function
  async function getData(url){
  const response = await fetch(url)
  const data = await response.json()
  return data;
  }



const API_KEY = 'ea0e8d2f';
const infoMoviesByGenreSearch = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTitle}`);
const resultData = infoMoviesByGenreSearch.Search;
const resultDataObj = resultData.map( infoMoviesByGenre =>{
    return {
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
   })
console.log(resultDataObj);
}

searchTitleMovie('super');  //3. User search by title