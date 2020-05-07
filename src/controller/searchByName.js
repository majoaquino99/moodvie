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
const resultDataObj = resultData.map( movie =>{
    return {
        title: movie.Title,
        imgURL: movie.Poster,
        year: movie.Year,
        runtime: movie.Runtime,
        genre: movie.Genre,
        summary:movie.Plot,
        director: movie.Director,
        writer: movie.Writer,
        actors : movie.Actors,
        language : movie.Language,
        country: movie.Country,
        imdbRating: movie.imdbRating,
        type: movie.Type,
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