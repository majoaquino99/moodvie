const axios = require('axios');
//Search by Name Function
async function searchTitleMovie(searchTitle){

//  * 1. Fetch all the data list

async function getData(url){
  const {data} = await axios.get(url)
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
   return resultDataObj;
};

searchTitleMovie('super')
.then(console.log)
.catch(err=>console.log(err))
.finally(()=>{
  debugger
});  //3. User search by title